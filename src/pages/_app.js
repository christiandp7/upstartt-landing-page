import { ChakraProvider, CSSReset } from '@chakra-ui/react';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App

