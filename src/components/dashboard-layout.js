import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';

import { DashboardNavbar } from './dashboard-navbar';
import { DashboardSidebar } from './dashboard-sidebar';
import { auth } from '../Firebase';


const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

export const DashboardLayout = (props) => {
  const router = useRouter();
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const checkUser = () => {
      auth.onAuthStateChanged(async function(user) {
          if (user) {
              sessionStorage.setItem("userId", user.uid);
              sessionStorage.setItem("userEmail", user.email);
          } else {
            router.push('/login');
          }
      });
  }

  useEffect(() => {
      checkUser();
  }, []);

  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
};
