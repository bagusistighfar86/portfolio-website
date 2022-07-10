import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

function DetailWeb({ data }) {
  const { idWeb } = useParams();
  console.log('Masuk Detail Web');
  console.log(data);
  return (
    <Box py={28} background="#1A3029" minH="100vh">
      <Text>
        Ini halaman
        {idWeb}
      </Text>
    </Box>
  );
}

export default DetailWeb;
