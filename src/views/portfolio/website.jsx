import React from 'react';
import {
  Box, Button, Container, Flex, Heading, Text, VStack,
} from '@chakra-ui/react';
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import webData from 'data/webData';

function Website() {
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
        {webData.map((item) => (
          <Box
            key={item.judul}
            h={{
              base: '100%',
              // sm: '380px',
              // md: '340px',
              // lg: '360px',
              // xl: '375px',
              // '2xl': '360px',
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
              <Box w="100%" h="150px" bgImage={item.cover} bgSize="cover" bgPosition="center" bgRepeat="no-repeat" borderRadius={20} position="relative">
                <Box background="#FDEC6C" w="80%" h="35px" position="absolute" bottom="0" right="0" />
              </Box>
              <Box w="100%">
                <Heading
                  fontSize={{
                    base: '2xl',
                    xl: 'xl',
                    '2xl': '2xl',
                  }}
                  _groupHover={{
                    bgGradient: 'linear(to-bl, #9796F0, #FBC7D4)',
                    bgClip: 'text',
                  }}
                >
                  {item.judul}
                </Heading>
              </Box>
              <Box
                w="100%"
                h={{
                  base: '130px',
                  sm: '100px',
                  md: '60px',
                  lg: '80px',
                  xl: '100px',
                  '2xl': '80px',
                }}
              >
                <Text
                  fontSize={{
                    base: 'md',
                  }}
                >
                  {item.desc}
                </Text>
              </Box>
              <Button
                as={ReachLink}
                to={`detailWeb/${item.id}`}
                onClick={() => navigate(`detailWeb/${item.id}`)}
                bgGradient="linear(to-bl, #9796F0, #FBC7D4)"
                bgClip="text"
                background="#1A3029"
                border="1px solid #27433A"
                borderRadius={8}
                px={4}
                _groupHover={{
                  bgClip: 'unset',
                  color: 'white',
                  bgGradient: 'linear(to-bl, #9796F0, #FBC7D4)',
                }}
              >
                See More
              </Button>
            </VStack>
          </Box>
        ))}
      </Flex>
    </Container>
  );
}

export default Website;
