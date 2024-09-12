import { HeartIcon } from '@heroicons/react/24/outline'

import Carousel from '../Carousel/index.jsx'
import { apiUrl } from '../../config.js'

function Post ({ images, body, id, user }) {
  return (
    <div className='overflow-hidden rounded-lg bg-white dark:bg-neutral-900 shadow flex-none'>
      <div className=''>
        <Carousel images={images} />
      </div>
      <div className='px-4 py-4 sm:px-6 flex justify-between items-center'>
        <div className=''>
          <HeartIcon aria-hidden='true' className='h-6 text-rose-600' />
        </div>
        <div className='text-right flex items-center gap-2'>
          <p className='text-gray-500 text-sm'>{user.email}</p>
          <img src={apiUrl + user.avatar_url} alt='' className='h-6 w-6 flex-none rounded-full bg-gray-50' />
        </div>
      </div>
      <div className='px-4 py-4 sm:px-6'>
        <p>{body}</p>
      </div>
      <div className='px-4 py-4 sm:px-6'>
        {/* Likes and comments */}
      </div>
    </div>
  )
}

export default Post
