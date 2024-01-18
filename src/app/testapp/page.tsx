'use client';
import React, { FC } from 'react';

interface AppsProps {}

const TestApp: FC<AppsProps> = props => {
  const messages = [
    { role: 'system', content: '你是一个有用的邮件助手，需要帮忙分析邮件内容。' },
    {
      role: 'user',
      content:
        'IT部门有4个小组，分别是：网络组、开发组、用户支持组、基础设施组。网络组的职能是：负责公司内部网络的维护和管理。开发组的职能是：负责公司内部软件的开发和维护。用户支持组的职能是：负责公司内部软件的使用和维护，帐号管理，用户使用问题答疑。基础设施组的职能是：负责公司内部软件的安装和维护，邮件等第三方系统的日常使用维护。请根据各部门职责，分析以下邮件内容，判断该邮件应该由哪个部门处理。并以JSON格式返回结果。',
    },
    {
      role: 'user',
      content:
        '邮件内容如下Dear Team, Please kindly be noted that below staff has changed the title to system Engineer effective from 1/12/2023, please kindly update all IT setting. Thankyou!请分析邮件，是由哪个小组负责处理，使用中文回答',
    },
  ];
  const postData = {
    model: '01-ai/Yi-34B-Chat-4bits',
    messages,
    max_tokens: 1024,
    temperature: 1.0,
    stream: true,
  };

  const url = 'https://api-llm.opensand.ai/v1/chat/completions';
  const PostStream = async function () {
    console.log('url', url);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(response => {
        // The response is a ReadableStream
        const reader = response?.body?.getReader();
        console.log('response', response, reader);

        // Function to handle each chunk of data
        const processChunk = ({ done, value }: { done: boolean; value: any }) => {
          console.log('Received chunk', done, value);
          if (done) {
            console.log('Stream complete');
            return;
          }

          // Assuming the server sends JSON data, you can convert the chunk to text
          const text = new TextDecoder().decode(value);
          console.log('Received chunk', text);

          // Parse the chunk if it's JSON and do something with the data
          try {
            const jsonData = JSON.parse(text);
            // Handle the JSON data
            console.log(jsonData);
          } catch (error) {
            console.error('Error parsing JSON chunk', error);
          }

          // Read the next chunk of data
          reader?.read().then(processChunk);
        };

        // Start reading the stream
        reader?.read().then(processChunk);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  };

  return (
    <main style={{ paddingTop: '96px', textAlign: 'center' }}>
      <h1>test app</h1>
      <button onClick={PostStream}>POST STREAM</button>
    </main>
  );
};

export default TestApp;
