import React, { useEffect } from 'react';
import {
  Box,
} from '@chakra-ui/react';
import Hero from './hero';
import PortHome from './portHome';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Hero background="#981624" />
      <PortHome background="#981624" />
    </Box>
  );
}

export default Home;
