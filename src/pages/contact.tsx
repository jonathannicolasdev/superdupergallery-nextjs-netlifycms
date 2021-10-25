import NextHead from 'next/head'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { styled } from '../../stitches.config'

import Layout from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../components/meta/TwitterCardMeta'
import Hero from '../components/Hero'
import AnimatedHeading from '../components/AnimatedHeading'
import { Center } from '../components/Content'

const url =
  'https://superdupergallery.us5.list-manage.com/subscribe/post?u=ea7f4eb41aea3e44277132474&amp;id=4324c31b57'

const SimpleForm = () => <MailchimpSubscribe url={url} />

const FormWrapper = styled('div', {
  input: {
    padding: '1em',
    fontSize: '1rem',
  },
  button: {
    padding: '1em',
    fontSize: '1rem',
    color: 'white',
    cursor: 'pointer',
    border: '2px solid white',
    background: 'none',
  },
})

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
        <AnimatedHeading sentence="Contact Us" />
      </Hero>

      <Center>
        <FormWrapper>
          <SimpleForm />
        </FormWrapper>
      </Center>
    </Layout>
  )
}
