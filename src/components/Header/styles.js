export default {
  headerWrapper: {
    header: {
      position: 'fixed',
      backgroundColor: 'purple.600',
      left: 0,
      right: 0,
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
      },
    },
  },
  logo_container: {
    height: '70px',
    transition: 'all 0.3s ease-in-out 0s',
    '.is-sticky &': {
      height: '55px',
    }
  },
  links: {
    color: 'white',
    p: 2,
    mx: 3,
    '.is-sticky &': {
      color: 'gray.700',
      _hover: {
        color: 'purple.600'
      }
    }
  }
}