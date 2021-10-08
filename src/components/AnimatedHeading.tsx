import { motion } from 'framer-motion'
import { styled } from '../../stitches.config'

const HeadingHome = styled('h1', {
  textTransform: 'uppercase',
  fontFamily: '"Titillium Web", sans-serif',
  lineHeight: '80%',
  fontWeight: 900,
  letterSpacing: 2,
  backgroundImage: 'url("/images/hero-text-background.jpg")',
  color: 'transparent',
  backgroundClip: 'text',
  filter: 'brightness(1.5)',
  '-webkit-text-stroke-width': '2px',
  '-webkit-text-stroke-color': 'white',
  fontSize: '4.5rem',
  '@desktop': {
    fontSize: '11.5rem',
  },
})

const Heading = styled('div', {
  textTransform: 'uppercase',
  maxWidth: '1000px',
  display: 'flex',
  flexWrap: 'wrap',
  fontWeight: 'bold',
  fontSize: '2.5rem',
  '@desktop': {
    fontSize: '5rem',
  },
})

const Word = styled('div', {
  margin: '5px',
  '@desktop': {
    margin: '10px',
  },
})

const defaultWords = [
  'Super',
  'Duper',
  'Gallery',
  'offers',
  'a',
  'portal',
  'further',
  'beyond',
]

type AnimatedHeadingProps = {
  words?: string[]
}

export default function AnimatedHeading({
  words = defaultWords,
}: AnimatedHeadingProps) {
  return (
    <Heading>
      {words.map((word, index) => {
        return (
          <Word key={index}>
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                delay: 0.25 * index,
                repeat: Infinity,
                repeatDelay: 0.25 * words.length,
                type: 'easeInOut',
              }}
            >
              {word}
            </motion.div>
          </Word>
        )
      })}
    </Heading>
  )
}

export const AnimatedHeadingHome = () => {
  return (
    <motion.div
      animate={{
        y: 20,
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 2,
      }}
    >
      <HeadingHome>
        Super
        <br />
        Duper
        <br />
        Gallery
      </HeadingHome>
    </motion.div>
  )
}
