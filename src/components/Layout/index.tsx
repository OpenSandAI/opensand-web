'use client';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { MetaMaskProvider } from '@metamask/sdk-react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

const Layout = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const theme = createTheme({
    palette: {
      primary: {
        main: '#dcf8bd',
      },
      secondary: {
        main: '#265b52',
      },
    },
  });

  const host = typeof window !== 'undefined' ? window.location.host : 'defaultHost';

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: 'open-sand-app',
      url: host,
    },
  };

  return (
    <body>
      <ThemeProvider theme={theme}>
        {/* <MetaMaskProvider debug={false} sdkOptions={sdkOptions}> */}
        <Header />
        {/* </MetaMaskProvider> */}
        {children}
        <Footer />
      </ThemeProvider>
    </body>
  );
};

export default Layout;
