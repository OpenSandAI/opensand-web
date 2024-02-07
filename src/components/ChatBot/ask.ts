import type { Message, ParseResult } from './types.d';

const parseLine = (str: string) => {
  const match = /^(.*?):\s?(.*)$/.exec(str);

  if (!match) {
    return [null, str];
  }

  return [match[1], match[2]].map(i => i ?? null);
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

const ask = async (onMessage: (data: string | null) => void, messages: Message[]) => {
  const token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9wZW5zYW5kIiwiaW5mbyI6eyJ0eXBlIjoic3RhZmYifSwiZXhwIjoxNzM4NzIwMDM5NjU4fQ.BJlzQM99gwcDSPWtjwbZf9_kDUlbtUv-uA-bKxFpQG0';
  const res = await fetch('https://api.opensand.ai/api/v1/algorithm/llm/stream', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      stream: true,
      temperature: 0,
      messages,
    }),
  });

  if (!res.ok) {
    throw new Error('Fetch sse error');
  }

  const parseChunk = createParseChunkFn(event => {
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
