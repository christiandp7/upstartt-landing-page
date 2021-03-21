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
import Sticky from 'react-stickynode';

import styles from './styles';

// assets
import { LogoWhite } from '../../svg/Logo';

const Header = () => {
  return (
    <Box sx={styles.headerWrapper}>
      <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={10}>
        <Box as="header">
          <Container maxW="container.xl">
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
      </Sticky>
    </Box>
  )
}

const LogoNav = () => {
  return (
    <Box className="logo_container" sx={styles.logo_container}>
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
            mx={3}
            sx={styles.links}
            _hover={{
              textDecoration: 'none',
              color: useColorModeValue('gray.200', 'white'),
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
        color="white"
        aria-label="Dark Mode"
        icon={<SunIcon />}
        variant="ghost"
      />
      <Button
        as={'a'}
        fontSize={'sm'}
        fontWeight={400}
        variant={'link'}
        color={'white'}
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
