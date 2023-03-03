import {
    Box,
    Container,
    Stack,
    Text,
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  
  export default function SmallWithSocial() {
    const [year, setYear] = useState(new Date().getFullYear());
    useEffect(() => {
      setYear(new Date().getFullYear());
    }, []);
    return (
      <Box
        bg={'black'}
        marginTop={'1'}
        color={'white'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'center' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© {year} Syed's Event. All rights reserved</Text>
        </Container>
      </Box>
    );
  }