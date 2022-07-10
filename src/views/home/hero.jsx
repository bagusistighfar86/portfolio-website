import React from 'react';
import {
  Box, chakra, Flex, HStack, Image, Spacer, Text, VStack,
} from '@chakra-ui/react';
import BagusDarkHero from 'assets/BagusDarkHero.png';
import HeroBg from 'assets/HeroBg.png';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { isValidMotionProp, motion } from 'framer-motion';

function Hero() {
  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and the children prop to be forwarded.
     * All other chakra props not matching the motion props will still be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
  });
  return (
    <Box h="100vh" py={28}>
      <VStack h="calc(100vh - 150px)" justifyContent="end" alignItems="center">
        <Spacer />
        <HStack position="relative">
          <Image src={HeroBg} alt="BagusDarkHero" maxW="100%" transform="scale(1.1)" position="absolute" left="0" right="0" zIndex="base" display={{ base: 'none', md: 'block' }} />
          <Flex w="50%" display={{ base: 'none', md: 'block' }} zIndex="docked" alignContent="center">
            <Box position="relative">
              <Image src={BagusDarkHero} alt="BagusDarkHero" margin="auto" />
            </Box>
          </Flex>
          <Box maxW={{ base: '90%', md: '50%' }} zIndex="docked">
            <Text
              fontSize={{
                base: '3xl',
                lg: '4xl',
                xl: '5xl',
                '2xl': '6xl',
              }}
              fontWeight="bold"
              bgGradient="linear(to-bl, #9796F0, #FBC7D4)"
              bgClip="text"
            >
              HELLO!
            </Text>
            <Text
              fontSize={{
                base: '2xl',
                md: '2xl',
                lg: '4xl',
                xl: '5xl',
                '2xl': '6xl',
              }}
              fontWeight="semibold"
            >
              Welcome to my website.
            </Text>
            <Text fontSize={{
              base: '',
              md: 'lg',
              lg: 'xl',
              xl: '2xl',
            }}
            >
              You can call me
              <Text as="span" fontWeight="bold" bgGradient="linear(to-bl, #9796F0, #FBC7D4)" bgClip="text"> BAGUS</Text>
              . I’m a Frontend Engineer,
              UI/UX Designer, Photographer, and Videographer.
            </Text>
          </Box>
        </HStack>
        <Spacer />
        <ChakraBox
          animate={{
            translateY: ['0', '-20px'],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: 'Infinity',
            repeatType: 'reverse',
          }}
          _hover={{
            color: '#9796F0',
            cursor: 'pointer',
          }}
          onClick=""
        >
          <FaAngleDoubleDown fontSize="35px" />
        </ChakraBox>
      </VStack>
    </Box>
  );
}

export default Hero;
