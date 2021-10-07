import ReactMultiCarousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { styled } from '../../stitches.config'

type Props = {
  images: any
}

const CarouselItem = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})

const CarouselImage = styled('img', {
  maxHeight: '500px',
})

export default function Carousel({ images }: Props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <ReactMultiCarousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      showDots={true}
    >
      {images.map((imageURL, index) => {
        return (
          <CarouselItem key={index}>
            <CarouselImage src={imageURL} alt={imageURL} />
          </CarouselItem>
        )
      })}
    </ReactMultiCarousel>
  )
}
