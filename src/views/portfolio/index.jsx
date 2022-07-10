import React, { useEffect, useState } from 'react';
import {
  Box,
} from '@chakra-ui/react';
import PortLayout from 'components/layout/portLayout';
import { useLocation } from 'react-router-dom';
import Website from './website';
import UIUX from './uiux';
import Photography from './photography';
import Videography from './videography';

function Portfolio() {
  const location = useLocation();

  const [active, setActive] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.pathname === '/portfolio/website') {
      setActive(<Website />);
    } else if (location.pathname === '/portfolio/uiux') {
      setActive(<UIUX />);
    } else if (location.pathname === '/portfolio/photography') {
      setActive(<Photography />);
    } else if (location.pathname === '/portfolio/videography') {
      setActive(<Videography />);
    }
  }, [location.pathname]);

  return (
    <Box py={28}>
      <PortLayout>
        {active}
      </PortLayout>
    </Box>
  );
}

export default Portfolio;
