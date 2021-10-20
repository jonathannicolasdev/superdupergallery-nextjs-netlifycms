import NextHead from 'next/head'

import Layout from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../components/meta/TwitterCardMeta'
import Hero from '../components/Hero'
import AnimatedHeading from '../components/AnimatedHeading'
import { Center } from '../components/Content'
import TeamMembers from '../components/TeamMembers'

export default function AboutPage() {
  return (
    <Layout>
      <NextHead>
        <title>About Our Super Duper Gallery</title>
      </NextHead>

      <BasicMeta url={'/about'} />
      <OpenGraphMeta url={'/about'} />
      <TwitterCardMeta url={'/about'} />

      <Hero>
        <AnimatedHeading />
      </Hero>

      <Center>
        <TeamMembers />
      </Center>
    </Layout>
  )
}
