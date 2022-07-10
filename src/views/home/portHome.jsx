import React from 'react';
import {
  Box, Button, Center, Flex, Heading, Text,
} from '@chakra-ui/react';
import PortItem from 'data/portItem';
import { Link as ReachLink, useNavigate } from 'react-router-dom';

function PortHome() {
  const navigate = useNavigate();

  return (
    <Box py={28}>
      <Heading
        fontSize={{
          base: '4xl',
          md: '5xl',
          '2xl': '6xl',
        }}
        fontWeight="bold"
        bgGradient="linear(to-bl, #9796F0, #FBC7D4)"
        bgClip="text"
        mb={10}
      >
        Portfolio
      </Heading>
      <Flex
        w="100%"
        wrap="wrap"
        gap={{
          base: '6',
          lg: '8',
          '2xl': '10',
        }}
        justifyContent="space-between"
        mb={10}
      >
        {PortItem.map((item) => (
          <Center
            key={item.label}
            as={ReachLink}
            to={item.path}
            onClick={() => navigate(item.path)}
            position="relative"
            h={{
              base: '100px',
              md: '200px',
            }}
            bgImage={item.bgPath}
            bgPosition="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            flexBasis={{
              base: '100%',
              md: '47.5%',
              lg: '48%',
              xl: '48.5%',
            }}
            borderRadius={20}
            role="group"
            transition="all .2s ease-in-out "
            _hover={{
              transform: 'scale(1.02)',
            }}
          >
            <Text
              key={item}
              fontWeight="bold"
              fontSize={{
                base: '2xl',
                '2xl': '3xl',
              }}
              zIndex="sticky"
              _groupHover={{
                bgGradient: 'linear(to-bl, #9796F0, #FBC7D4)',
                bgClip: 'text',
              }}
            >
              {item.label}
            </Text>
            <Box
              position="absolute"
              w="100%"
              h={{
                base: '100px',
                md: '200px',
              }}
              background="linear-gradient(45deg, rgba(10,34,26,1) 0%, rgba(10,34,26,0.5) 100%)"
              _groupHover={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                cursor: 'pointer',
              }}
              boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.37)"
              borderRadius={20}
            />
          </Center>
        ))}
      </Flex>
      <Center w="100%">
        <Button
          as={ReachLink}
          to="/portfolio/website"
          onClick={() => navigate('/portfolio/website')}
          bgGradient="linear(to-bl, #9796F0, #FBC7D4)"
          bgClip="text"
          background="#1A3029"
          border="1px solid #27433A"
          borderRadius={20}
          px={10}
          _hover={{
            bgClip: 'unset',
            color: 'white',
            bgGradient: 'linear(to-bl, #9796F0, #FBC7D4)',
          }}
        >
          See More
        </Button>
      </Center>
    </Box>
  );
}

export default PortHome;
