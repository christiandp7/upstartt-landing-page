import React from 'react'
import { Heading } from '@chakra-ui/react'
import Layout from '../components/Layout'

// Seections
import Hero from '../sections/Home/Hero'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <br /><br /><br /><br /><br /><br />
      <Heading as="h1">Content </Heading>
      <br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Heading as="h3">End</Heading>
    </Layout>
  )
}

export default Home
