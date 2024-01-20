export const enum Role {
    Assistant = 'assistant',
    User = 'user',
  }
  
  export interface Message {
    role: string;
    content: string;
  }
  
  interface Log extends Message {
    id: string;
    answering?: boolean;
  }