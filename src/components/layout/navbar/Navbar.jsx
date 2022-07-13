import React, { useEffect, useRef, useState } from 'react';
import {
  Box, Image, Container, Button, Flex, Spacer, HStack,
  useDisclosure, Drawer, DrawerOverlay,
  DrawerContent, DrawerHeader, DrawerBody, VStack, Link, DrawerCloseButton,
} from '@chakra-ui/react';
import { Link as ReachLink, useLocation, useNavigate } from 'react-router-dom';
import whiteLogo from 'assets/WhiteLogo.png';
// import blackLogo from 'assets/BlackLogo.png';
import { SunIcon, HamburgerIcon } from '@chakra-ui/icons';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    isOpen, onOpen, onClose,
  } = useDisclosure();
  const drawerRef = useRef();

  const [active, setActive] = useState('');

  const NavItem = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Portfolio',
      path: '/portfolio/website',
    },
    {
      label: 'Blog',
      path: '#',
    },
    {
      label: 'About',
      path: '#',
    },
  ];

  useEffect(() => {
    if (location.pathname === '/') setActive('Home');
    else if (location.pathname.includes('/portfolio')) setActive('Portfolio');
    else if (location.pathname === '/blog') setActive('Blog');
    else if (location.pathname === '/about') setActive('About');
  }, [location.pathname]);

  return (
    <Box py={5} w="100%" position="fixed" backgroundColor="#0A221A" zIndex="sticky">
      <Container maxW={{
        base: '100%',
        sm: '95%',
        md: '90%',
      }}
      >
        <Flex alignItems="center">
          <Image src={whiteLogo} h="47px" alt="Logo MBI" me={10} />
          <HStack
            spacing={10}
            color="white"
            display={{ base: 'none', md: 'flex' }}
          >
            {NavItem.map((item) => (
              <Link
                as={ReachLink}
                key={item.label}
                to={item.path}
                onClick={() => navigate(item.path)}
                _hover={{
                  bgClip: 'text',
                  bgGradient: 'linear(to-bl, #9796F0, #FBC7D4)',
                }}
                bgClip={active === item.label ? 'text' : null}
                bgGradient={active === item.label ? 'linear(to-bl, #9796F0, #FBC7D4)' : null}
                fontWeight={active === item.label ? 'black' : 'normal'}
              >
                {item.label}
              </Link>
            ))}
          </HStack>
          <Spacer />
          <Button
            disabled
            background="#1A3029"
            border="1px solid #27433A"
            color="white"
            me={4}
            _hover={{
              bgClip: 'unset',
              color: 'white',
              bgGradient: 'linear(to-bl, #9796F0, #FBC7D4)',
            }}
            display={{ base: 'none', md: 'flex' }}
          >
            Contact Me

          </Button>
          <Button
            disabled
            background="#1A3029"
            border="1px solid #27433A"
            color="white"
            me={4}
            _hover={{
              bgClip: 'unset',
              color: 'white',
              bgGradient: 'linear(to-bl, #9796F0, #FBC7D4)',
            }}
          >
            <SunIcon />
          </Button>
          <Button background="#1A3029" border="1px solid #27433A" color="white" ref={drawerRef} onClick={onOpen} display={{ base: 'flex', md: 'none' }}>
            <HamburgerIcon w={5} h={5} />
          </Button>
        </Flex>
      </Container>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={drawerRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerCloseButton />

          <DrawerBody>
            <VStack alignItems="left" spacing={3}>
              {NavItem.map((item) => (
                <Link key={item.label} as={ReachLink} to={item.path}>{item.label}</Link>
              ))}
            </VStack>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
