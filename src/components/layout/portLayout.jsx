import React, { useEffect, useState } from 'react';
import {
  Box, Button, Container, Flex, Text, VStack,
} from '@chakra-ui/react';
import { useLocation, Link as ReachLink } from 'react-router-dom';
import PortItem from 'data/portItem';

function PortLayout({ children }) {
  const location = useLocation();
  const [isActive, setActive] = useState('');

  useEffect(() => {
    if (location.pathname === '/portfolio/website') setActive('Website');
    else if (location.pathname === '/portfolio/uiux') setActive('UI/UX');
    else if (location.pathname === '/portfolio/photography') setActive('Photography');
    else if (location.pathname === '/portfolio/videography') setActive('Videography');
  }, [location.pathname]);

  return (
    <Box w="100%" backgroundColor="#0A221A">
      <VStack justifyContent="center" mb={10}>
        <Text
          fontSize={{
            base: '5xl',
            '2xl': '6xl',
          }}
          fontWeight="bold"
          bgGradient="linear(to-bl, #9796F0, #FBC7D4)"
          bgClip="text"
          mb={3}
        >
          Portfolio
        </Text>
        <Flex justifyContent="center" flexWrap="wrap" w="100%">
          {PortItem.map((item) => (
            <Button
              disabled={item.label === 'Videography'}
              as={ReachLink}
              to={item.path}
              key={item.label}
              border="1px solid #27433A"
              borderRadius={20}
              flexBasis={{
                base: '40%',
                md: '20%',
                lg: '15%',
                xl: '10%',
              }}
              fontSize={{
                base: 'sm',
                sm: 'md',
              }}
              _hover={{
                bgClip: 'unset',
                color: 'white',
                bgGradient: 'linear(to-bl, #9796F0, #FBC7D4)',
              }}
              bgClip={isActive === item.label ? 'unset' : 'text'}
              bgGradient={isActive === item.label ? 'linear(to-bl, #9796F0, #FBC7D4)' : 'linear(to-bl, #9796F0, #FBC7D4)'}
              onClick={() => (setActive(item.label))}
              me={3}
              mb={3}
            >
              {item.label}
            </Button>
          ))}
        </Flex>
      </VStack>
      <Container minH="100%" maxW="100%" color="white">
        {children}
      </Container>
    </Box>
  );
}

export default PortLayout;
