import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import themeSettings from '../theme'
import '../assets/scss/index.scss'

const theme = extendTheme(themeSettings)

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;