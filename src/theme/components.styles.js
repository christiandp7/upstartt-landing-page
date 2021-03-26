export default {
  Button: {
    variants: {
      "cta-light": {
        color: 'white',
        border: 'solid 1px white',
        ":hover": {
          backgroundColor: 'white',
          // color: 'gray.700'
          color: 'upstt_purple.500'
        },
        ":active": {
          backgroundColor: 'upstt_gray.500',
          borderColor: 'upstt_gray.500',
          color: 'white'
        }
      }
    }
  },
  IconButton: {
    variants: {
      "dark-mode-switch": {

      }
    }
  }
}