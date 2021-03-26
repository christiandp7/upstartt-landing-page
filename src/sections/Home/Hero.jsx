import React from 'react'
import { Box, Button, Container, Flex, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';

import { Wave1 } from '../../svg/Waves';
import { Rocket } from '../../svg/Rocket';

const Hero = () => {


  return (
    <Box
      sx={styles.sectionWrapper}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          zIndex: -1,
        }}
      >
        <Wave1 />
      </Box>
      <Container maxW="container.xl" sx={styles.sectionContainer}>

        <Flex>
          <Box width={['100%', '40%', '40%',]}>
            <Box mt={5}>
              <Heading as="h1" mb={4} sx={{ color: useColorModeValue("white", "gray.800") }}>
                Descubre la magia de Aprender Haciendo
              </Heading>
              <Text fontSize="xl" mb={5} sx={{ color: useColorModeValue("white", "gray.800") }}>
                Somos una aceleradora que busca impulsar el talento de los jóvenes de América Latina para que nunca más se queden sin trabajo.
              </Text>
              <Button size="lg" variant="outline" sx={{ color: useColorModeValue("white", "gray.800") }}>Postula ahora</Button>
            </Box>
          </Box>
          <Box width={['100%', '60%', '60%',]}>
            <Rocket />
          </Box>
        </Flex>

      </Container>

    </Box>
  )
}


const styles = {
  sectionWrapper: {
    // minHeight: '100vh',
    // backgroundColor: 'green'
  },
  sectionContainer: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
  },
}

export default Hero
