/** 移动端导航链接 */
export const MOBILE_NAVIGATION_LIST = [
  {
    name: 'ChatGPT',
    path: 'chat',
  },
  {
    name: 'Whitepaper',
    path: 'whitepaper',
  },
  {
    name: 'Roadmap',
    path: 'roadmap',
  },
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Contact Us',
    path: 'contact',
  },
];


export const handleAccountSlice = (account: string| undefined) => account ? `${account.slice(0,4)}...${account.slice(-4)}` : ''