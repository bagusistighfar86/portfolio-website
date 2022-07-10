import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Navbar from './navbar/Navbar';

function Layout({ children }) {
  return (
    <Box w="100%" backgroundColor="#0A221A">
      <Navbar />
      <Container maxW="90%" minH="100vh" color="white">
        {children}
      </Container>
    </Box>
  );
}

export default Layout;
