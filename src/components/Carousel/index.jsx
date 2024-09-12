import { Carousel as CarouselMUI } from '@material-tailwind/react'
import { apiUrl } from '../../config.js'

import { prevArrowHandler, nextArrowHandler, navigationHandler } from './helpers.jsx'

function Carousel ({ images }) {
  const inputProps = images.length > 1 ? { prevArrow: prevArrowHandler, nextArrow: nextArrowHandler, navigation: navigationHandler } : { prevArrow: () => {}, nextArrow: () => {} }

  return (
    <CarouselMUI className='rounded-xl' {...inputProps}>
      {images.map(image => <img key={image} src={apiUrl + image} alt='image 1' className='h-full w-full object-cover aspect-square' />)}
    </CarouselMUI>
  )
}

export default Carousel
