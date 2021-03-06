import React from 'react';
import {
  Box, Button, Container, Flex, Heading, Text, VStack,
} from '@chakra-ui/react';
import { Link as ReachLink, useNavigate } from 'react-router-dom';

function UIUX() {
  const navigate = useNavigate();
  return (
    <Container maxW="100%" m={0} p={0}>
      <Flex
        wrap="wrap"
        rowGap={{
          base: '5',
          xl: '8',
        }}
        justifyContent="space-between"
        mb={10}
      >
        <Box
          h={{
            base: '485px',
            sm: '400px',
            md: '385px',
            lg: '405px',
            xl: '455px',
            '2xl': '405px',
          }}
          p={4}
          background="#1A3029"
          border="1px solid #27433A"
          flexBasis={{
            base: '100%',
            lg: '49%',
            xl: '32%',
          }}
          borderRadius={20}
          role="group"
          _hover={{
            transform: 'scale(1.02)',
            cursor: 'pointer',
          }}
          transition="all .2s ease-in-out"
        >
          <VStack alignItems="start">
            <Box w="100%" h="150px" background="#FF6C6C" borderRadius={20} />
            <Box w="100%">
              <Heading
                fontSize={{
                  base: '3xl',
                }}
                _groupHover={{
                  bgGradient: 'linear(to-bl, #9796F0, #FBC7D4)',
                  bgClip: 'text',
                }}
              >
                Judul
              </Heading>
            </Box>
            <Box
              w="100%"
              h={{
                base: '200px',
                sm: '120px',
                md: '100px',
                lg: '120px',
                xl: '170px',
                '2xl': '120px',
              }}
              background="#FF6C6C"
            >
              <Text
                fontSize={{
                  base: 'md',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis doloribus sed maiores, quasi odit quis eum animi consequuntur nam recusandae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis doloribus sed maiores,
              </Text>
            </Box>
            <Button
              as={ReachLink}
              to="/portfolio/website"
              onClick={() => navigate('/portfolio/website')}
              bgGradient="linear(to-bl, #9796F0, #FBC7D4)"
              bgClip="text"
              background="#1A3029"
              border="1px solid #27433A"
              borderRadius={8}
              px={4}
              _hover={{
                bgClip: 'unset',
                color: 'white',
                bgGradient: 'linear(to-bl, #9796F0, #FBC7D4)',
              }}
            >
              See More
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
}

export default UIUX;
