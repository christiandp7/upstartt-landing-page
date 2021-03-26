export default {
  headerWrapper: {
    header: {
      position: 'fixed',
      // backgroundColor: 'upstt_purple.500',
      left: 0,
      right: 0,
      mt: '15px',
      // py: 20,
      transition: 'all 0.3s ease-in-out 0s',
      '&.is-mobile-menu': {
        backgroundColor: 'white',
      },
    },
    '.is-sticky': {
      header: {
        backgroundColor: 'white',
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
        mt: '0',
        // boxShadow: "base",
      },
    },
  },
  logo_container: {
    width: '200px',
    py: 2,
    // transition: 'all 0.3s ease-in-out 0s',
    svg: {
      transition: 'all 0.3s ease-in-out 0s',
      width: '160px',
      height: 'auto',
      path: {
        fill: 'white'
      },
    },
    '.is-sticky &': {
      py: 1,
      svg: {
        width: '130px',
        '.logo_arc': {
          fill: 'upstt_purple.500',
        },
        path: {
          fill: 'gray.900'
        },
      },
    },
  },
  links: {
    color: 'white',
    p: 2,
    mx: 3,
    '.is-sticky &': {
      color: 'gray.700',
      _hover: {
        color: 'upstt_purple.500'
      }
    }
  },
  signIn: {
    _hover: {
      textDecoration: 'none'
    },
    '.is-sticky &': {
      color: 'gray.700',
      _hover: {
        color: 'upstt_purple.500'
      }
    }
  },
  themeSwitch: {
    _hover: {
      color: 'gray.200'
    },
    '.is-sticky &': {
      color: 'gray.700',
      _hover: {
        color: 'upstt_purple.500'
      }
    }
  },
  ctaHeader: {
    borderColor: 'upstt_gray.500',
    borderWidth: '1px',
    borderStyle: 'solid',
    '.is-sticky &': {
      color: 'white',
      bg: 'upstt_purple.500',
      borderColor: 'upstt_purple.500',
      borderWidth: '1px',
      borderStyle: 'solid',
      _hover: {
        bg: 'transparent',
        color: 'upstt_purple.500'
      }
    }
  }
}