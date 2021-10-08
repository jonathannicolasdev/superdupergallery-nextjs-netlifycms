import ReactMultiCarousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { styled } from '../../stitches.config'

type Props = {
  images: any
}

const CarouselContainer = styled('div', {
  maxWidth: '768px',
  margin: '0 auto',
  userSelect: 'none',
})

const CarouselItem = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
})

const CarouselImage = styled('img', {
  maxWidth: '100%',
  maxHeight: '500px',
})

export default function Carousel({ images }: Props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  }

  return (
    <CarouselContainer>
      <ReactMultiCarousel
        autoPlay
        autoPlaySpeed={5000}
        containerClass="carousel-container"
        infinite
        keyBoardControl
        removeArrowOnDeviceType={['tablet', 'mobile']}
        renderButtonGroupOutside
        responsive={responsive}
        showDots
        ssr
        swipeable
      >
        {images.map((imageURL, index) => {
          return (
            <CarouselItem key={index}>
              <CarouselImage src={imageURL} alt={imageURL} />
            </CarouselItem>
          )
        })}
      </ReactMultiCarousel>
    </CarouselContainer>
  )
}
