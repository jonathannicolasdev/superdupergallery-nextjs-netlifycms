import { motion } from 'framer-motion'
import { styled } from '../../stitches.config'

const Heading = styled('h1', {
  fontSize: '5rem',
  textTransform: 'uppercase',
})

export default function AnimatedHeading() {
  return (
    <h1>
      Super Duper Gallery <br />
      offers a portal <br />
      further beyond
    </h1>
  )
}
