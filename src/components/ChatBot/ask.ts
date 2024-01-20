import type { Message } from './types.d';

type ParseResult =
  | {
      type: 'event';
      event: string | null;
      id: string | null;
      data: string | null;
    }
  | {
      type: 'retry';
      value: number;
    };

const parseLine = (str: string) => {
  const match = /^(.*?):\s?(.*)$/.exec(str);

  if (!match) {
    return [null, str];
  }

  return [match[1], match[2]].map((i) => i ?? null);
};

const createParseChunkFn = (onParse: (val: ParseResult) => void) => {
  let buffer = '';

  const parseBuffer = () => {
    let eventName: string | null = null;
    let eventId: string | null = null;

    for (const line of buffer.split('\n')) {
      if (!line || line.startsWith(':')) {
        // Ignore invalid data
      } else {
        const [field, value] = parseLine(line);

        switch (field) {
          case 'event':
            eventName = value;
            break;

          case 'id':
            eventId = value;
            break;

          case 'data':
            onParse({
              type: 'event',
              event: eventName,
              id: eventId,
              data: value,
            });
            break;

          case 'retry':
            const retry = Number(value);
            if (!Number.isNaN(retry)) {
              onParse({ type: 'retry', value: retry });
            }
            break;

          default:
            break;
        }
      }
    }
  };

  return (chunk: string) => {
    buffer += chunk;

    if (buffer.endsWith('\n\n')) {
      parseBuffer();
      buffer = '';
    }
  };
};

const ask = async (
  onMessage: (data: string | null) => void,
  messages: Message[]
) => {
  const res = await fetch('/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer e59f67cf0e5e4d56bf4273c1f2fc6fe1', // Fill your OpenAI key
    },
    body: JSON.stringify({
      stream: true,
      max_tokens: 1000,
      model: 'gpt-3.5-turbo',
      temperature: 0.8,
      top_p: 1,
      presence_penalty: 1,
      messages,
    }),
  });

  if (!res.ok) {
    throw new Error('Fetch sse error');
  }

  const parseChunk = createParseChunkFn((event) => {
    if (event.type === 'event') {
      onMessage(event.data);
    }
  });

  const reader = res.body?.getReader();
  if (reader) {
    void (function read() {
      reader.read().then(({ done, value }) => {
        if (done) {
          return;
        }
        const chunk = new TextDecoder().decode(value);
        parseChunk(chunk);
        read();
      });
    })();
  }
};

export default ask;
