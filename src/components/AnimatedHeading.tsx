import { motion } from 'framer-motion'
import { styled } from '../../stitches.config'

const Heading = styled('div', {
  fontSize: '5rem',
  textTransform: 'uppercase',
  maxWidth: '1000px',
  display: 'flex',
  flexWrap: 'wrap',
  fontWeight: 'bold',
})

const Word = styled('div', {
  margin: '10px',
})

const words = [
  'Super',
  'Duper',
  'Gallery',
  'offers',
  'a',
  'portal',
  'further',
  'beyond',
]

export default function AnimatedHeading() {
  return (
    <div>
      <Heading>
        {words.map((word, index) => {
          return (
            <Word>
              <motion.div
                key={index}
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
    </div>
  )
}
