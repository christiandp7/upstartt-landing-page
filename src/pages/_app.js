import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import '../assets/scss/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;