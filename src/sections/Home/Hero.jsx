import React from 'react'
import { Box, Button, Container, Flex, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';

import { Wave1, Wave2 } from '../../svg/Waves';
import { Rocket } from '../../svg/Rocket';

const Hero = () => {


  return (
    <Box
      sx={styles.sectionWrapper}
    >
      <Box
        sx={styles.bgContainer}
      >
        <Wave2 />
      </Box>
      <Container maxW="container.xl" sx={styles.sectionContainer}>

        <Flex flexWrap="wrap">
          <Box width={['100%', '100%', '40%', '40%']}>
            <Box mt={5}>
              <Heading as="h1" mb={5} sx={{ color: useColorModeValue("white", "gray.800") }}>
                Descubre la magia de Aprender Haciendo
              </Heading>
              <Text fontSize="xl" mb={7} sx={{ color: useColorModeValue("white", "gray.800") }}>
                Somos una aceleradora que busca impulsar el talento de los jóvenes de América Latina para que nunca más se queden sin trabajo.
              </Text>
              <Button size="lg" variant="cta-light">Postula ahora</Button>
            </Box>
          </Box>
          <Box width={['100%', '100%', '60%', '60%']}>
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
    position: 'relative',
    _after: {
      content: '""',
      bgGradient: 'linear(to-tr, upstt_purple.700, purple.400)',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: -2,
    }
  },
  bgContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
    zIndex: -1,
  },
  sectionContainer: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',

  },
}

export default Hero
