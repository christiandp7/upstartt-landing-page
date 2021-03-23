import React from 'react'
import { Heading } from '@chakra-ui/react'
import Layout from '../components/Layout'

// Seections
import Section1 from '../sections/Home/Section1'

const Home = () => {
  return (
    <Layout>
      <Section1 />
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
