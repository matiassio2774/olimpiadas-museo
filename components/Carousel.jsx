import { Carousel } from 'flowbite-react'

function MainCarousel() {
  return (
    <div className="h-96 w-full mx-auto sm:w-5/6 lg:h-5/6">
      <Carousel>
        <img
          src='/5.jpg'
          alt="..."
          className='h-screen object-cover'
        />
        <img
          src="/3.jpg"
          alt="..."
          className='h-screen object-cover'
        />
        <img
          src="/3.png"
          alt="..."
          className='h-screen object-cover'
        />
        <img
          src="/4.jpg"
          alt="..."
          className='h-screen object-cover'
        />
        <img
          src="/1.jpg"
          alt="..."
          className='h-screen object-cover'
        />
      </Carousel>
    </div>
  )
}

export default MainCarousel
