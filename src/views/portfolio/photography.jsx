import React from 'react';
import { Container, Image } from '@chakra-ui/react';

function Photography() {
  const srces = [
    'https://i.postimg.cc/WFsxHpZT/1.jpg',
    'https://i.postimg.cc/4HmLDYxk/1-58.jpg',
    'https://i.postimg.cc/7CnW0vWc/1-87.jpg',
    'https://i.postimg.cc/WhdCKHdF/Picture1.jpg',
    'https://i.postimg.cc/xJgBDrGH/Picture2.jpg',
    'https://i.postimg.cc/wRvZ9WFr/Picture3.jpg',
    'https://i.postimg.cc/kDXkN49y/Picture5.jpg',
    'https://i.postimg.cc/crP2NB3D/Salinan-47185006-347385976060891-689142788199816125-n.jpg',
    'https://i.postimg.cc/VvMVjC3M/IMG-2028.jpg',
    'https://i.postimg.cc/K1BM9mF9/DSC-0027.jpg',
    'https://i.postimg.cc/VdSMCjhP/DSC-0122.jpg',
    'https://i.postimg.cc/VrsHFGyN/1-84.jpg',
    'https://i.postimg.cc/6qjyf8nW/MG-9391.jpg',
    'https://i.postimg.cc/K4bxLFsG/edit-IMG-2065.jpg',
    'https://i.postimg.cc/YhnHJF20/IMG-2101.jpg',
  ];
  return (
    <Container
      padding={4}
      maxW="90%"
      mx="auto"
      sx={{ columnCount: [1, 2, 3, 4, 5], columnGap: '8px' }}
      bgGradient="linear(to-bl, #9796F033, #FBC7D480, )"
      borderRadius={20}
    >
      {srces.map((src) => (
        <Image
          key={src}
          w="100%"
          borderRadius="xl"
          mb={2}
          d="inline-block"
          src={src}
          alt="Alt"
        />
      ))}
    </Container>
  );
}

export default Photography;
