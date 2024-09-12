import { IconButton } from '@material-tailwind/react'

const prevArrowHandler = ({ handlePrev }) => (
  <IconButton variant='text' color='white' size='lg' onClick={handlePrev} className='!absolute top-2/4 left-4 -translate-y-2/4 dark:text-zinc-900'>
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='h-6 w-6'>
      <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18' />
    </svg>
  </IconButton>
)

const nextArrowHandler = ({ handleNext }) => (
  <IconButton variant='text' color='white' size='lg' onClick={handleNext} className='!absolute top-2/4 !right-4 -translate-y-2/4 dark:text-zinc-900'>
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='h-6 w-6'>
      <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3' />
    </svg>
  </IconButton>
)

const navigationHandler = ({ setActiveIndex, activeIndex, length }) => (
  <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
    {new Array(length).fill('').map((_, i) => (
      <span key={i} className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? 'w-8 bg-white dark:bg-zinc-900' : 'w-4 bg-white/50 dark:bg-zinc-900/50'}`} onClick={() => setActiveIndex(i)} />
    ))}
  </div>
)

export {
  prevArrowHandler,
  nextArrowHandler,
  navigationHandler
}
