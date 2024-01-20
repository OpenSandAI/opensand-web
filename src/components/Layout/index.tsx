'use client';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
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
  return (
    <body>
      <ThemeProvider theme={theme}>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </body>
  );
};

export default Layout;
