import { useNavigate, Link } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/20/solid'

import useFetch from '../../hooks/useServer'

function Login () {
  const { post } = useFetch()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    const credentials = Object.fromEntries(new FormData(e.target))
    const { body } = await post({ url: '/login', body: { user: credentials } })
    if (body) return navigate('/')
  }

  return (
    <>
      <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Log in to your account
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600 dark:text-white'>
              Or {' '}
              <Link to='#' className='font-medium text-indigo-600 dark:text-indigo-500 hover:text-indigo-500'>start your 14-day free trial</Link>
            </p>
          </div>
          <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='grid grid-cols-6 gap-4'>
              <div className='col-span-6'>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-white'>Email</label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  placeholder='john@doe.com'
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  p-2'
                />
              </div>

              <div className='col-span-6'>
                <label htmlFor='password' className='block text-sm font-medium text-gray-700 dark:text-white'>Password</label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='password'
                  required
                  placeholder='123456'
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  p-2'
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                />
                <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900 dark:text-white'>
                  Remember me
                </label>
              </div>

              <div className='text-sm'>
                <Link to='#' className='font-medium text-indigo-600 dark:text-indigo-500 hover:text-indigo-500'>
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <LockClosedIcon className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400' aria-hidden='true' />
                </span>
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
