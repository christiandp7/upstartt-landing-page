import React from 'react'
import {
  Box,
  Flex,
  Stack,
  Container,
  Link,
  Text,
  Button,
  IconButton,
  Image,
  // hooks
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SunIcon
} from '@chakra-ui/icons';

// assets
import { LogoWhite } from '../../svg/Logo';

const Header = () => {
  return (
    <Box>
      <Container maxW="container.xl" py={5}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          py={{ base: 2 }}
        >

          <LogoNav />
          <DesktopNav />
          <ActionButtons />

        </Flex>
      </Container>
    </Box>
  )
}

const LogoNav = () => {
  return (
    <Box
      textAlign="center"
      width="200px"
      Logo
    >
      <LogoWhite />
    </Box >

  )
}

const DesktopNav = () => {
  return (
    <Stack direction="row">
      {NAVITEMS.map(navitem => (
        <Box key={navitem.label}>
          <Link
            href={navitem.href}
            p={2}
            _hover={{
              textDecoration: 'none',
              color: useColorModeValue('gray.800', 'white'),
            }}>

            {navitem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  )
}

const ActionButtons = () => {
  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify="inheritflex-en"
      direction="row"
      spacing={6}
    >
      <IconButton
        aria-label="Dark Mode"
        icon={<SunIcon />}
        variant="ghost"
      />
      <Button
        as={'a'}
        fontSize={'sm'}
        fontWeight={400}
        variant={'link'}
        href={'#'}>
        Sign In
          </Button>
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'purple.500'}
        href={'#'}
        _hover={{
          bg: 'purple.600',
        }}>
        Sign Up
          </Button>
    </Stack>
  )
}

const NAVITEMS = [
  {
    label: "home",
    href: "#"
  },
  {
    label: "about",
    href: "#"
  },
  {
    label: "contact",
    href: "#"
  },
]


export default Header
