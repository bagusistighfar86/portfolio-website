import React from 'react';
import {
  Box, Heading, Text,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import webData from 'data/webData';

function DetailWeb() {
  const { id } = useParams();
  console.log('Masuk Detail Web');
  const data = webData[id - 1];
  console.log(data);

  // const [openImage, setOpenImage] = useState(false);

  return (
    <Box py={28} minH="100vh">
      <Box mb={10}>
        <Heading
          mb={3}
          fontSize={{
            base: '3xl',
            sm: '4xl',
            md: '5xl',
          }}
        >
          {data.judul}
        </Heading>
        <Text fontSize={{
          base: 'lg',
          sm: 'xl',
        }}
        >
          {data.desc}

        </Text>
      </Box>
      <Box
        w="100%"
        h={{
          base: '28vh',
          sm: '30vh',
          md: '40vh',
          lg: '50vh',
        }}
        borderRadius={20}
        position="relative"
        mb={10}
      >
        {/* <Button onClick={data.preview ? () => setOpenImage(true) : undefined}>PREVIEW IMAGE</Button>
        <Modal onClose={onClose} size={size} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Lorem count={2} />
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        ; */}

        {/* <Box
          w="100%"
          h="100%"
          bgImage={data.cover}
          bgSize="cover"
          bgPosition="center"
          position="absolute"
          bgRepeat="no-repeat"
          borderRadius={20}
          zIndex="docked"
        />
        <Box
          background="#FDEC6C"
          w="100%"
          h="100%"
          borderRadius={20}
          position="absolute"
          top={2}
          bgGradient="linear(to-bl, #9796F0, #FBC7D4)"
        /> */}
      </Box>
      <Heading
        fontSize={{
          base: '4xl',
          md: '5xl',
          '2xl': '4xl',
        }}
        fontWeight="bold"
        bgGradient="linear(to-bl, #9796F0, #FBC7D4)"
        bgClip="text"
        mb={10}
      >
        Portfolio
      </Heading>
      <Text>
        Ini halaman
        {id}
      </Text>
    </Box>
  );
}

export default DetailWeb;
