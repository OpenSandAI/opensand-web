import React, { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
import { Close } from '@mui/icons-material';
import { MOBILE_NAVIGATION_LIST } from './utils';

interface MobileNavProps {
  mobileNavVisible: boolean;
  setMobileNavVisible: (visible: boolean) => void;
}

const MobileNav: FC<MobileNavProps> = props => {
  const { mobileNavVisible, setMobileNavVisible } = props;

  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        transition: theme => theme.transitions.create(['top']),
        ...(matchMobileView && {
          py: 6,
          backgroundColor: '#2e5a51',
          zIndex: 'appBar',
          position: 'fixed',
          fontSize: 40,
          lineHeight: 2,
          height: { xs: '100vh', md: 'auto' },
          top: mobileNavVisible ? 0 : '-120vh',
          left: 0,
        }),
      }}
    >
      {MOBILE_NAVIGATION_LIST.map((item) => (
        <Link style={{ paddingLeft: '3rem' }} href={item.path} key={item.name}>
          - <span>{item.name}</span>
        </Link>
      ))}
      {mobileNavVisible && matchMobileView && (
        <IconButton
          sx={{
            position: 'fixed',
            top: 10,
            right: 10,
          }}
          onClick={() => setMobileNavVisible(!mobileNavVisible)}
        >
          <Close />
        </IconButton>
      )}
    </Box>
  );
};

export default MobileNav;
