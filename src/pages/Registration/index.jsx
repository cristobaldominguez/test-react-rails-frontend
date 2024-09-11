import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'
import useServer from '../../hooks/useServer'
import Dropzone from '../../components/DropZone/index.jsx'

function Registration() {
  const { post } = useServer()
  const { setUser } = useAuth()
  const navigate = useNavigate()
  const [avatar, setAvatar] = useState(null)

  const handleLogin = async e => {
    e.preventDefault()

    const formData = new FormData(e.target)
    formData.delete('user[password_confirm]')
    formData.append('user[avatar]', avatar, avatar.name)
    // ToDo: Validate data

    const { body, error } = await post({ url: '/signup', body: formData })
    if (error) return false

    setUser(body)
    return navigate('/')
  }

  return (
    <>
      <div className='hidden sm:block' aria-hidden='true'>
        <div className='py-5' />
      </div>

      <div className='mt-5 md:col-span-2 md:mt-0 w-full max-w-md space-y-8 mx-auto'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Create your account
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600 dark:text-white'>
            Or{' '}
            <Link to='#' className='font-medium text-indigo-600 dark:text-indigo-500 hover:text-indigo-500'>
              start your 14-day free trial
            </Link>
          </p>
        </div>
        <form onSubmit={handleLogin}>
          <div className='overflow-hidden sm:rounded-md'>
            <div className=''>
              <div className='grid grid-cols-6 gap-4'>
                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='first-name' className='block text-sm font-medium text-gray-700 dark:text-white'>First name</label>
                  <input
                    type='text'
                    name='user[first_name]'
                    id='first-name'
                    autoComplete='given-name'
                    placeholder='John'
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='last-name' className='block text-sm font-medium text-gray-700 dark:text-white'>Last name</label>
                  <input
                    type='text'
                    name='user[last_name]'
                    id='last-name'
                    autoComplete='family-name'
                    placeholder='Doe'
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2'
                  />
                </div>

                <div className='col-span-6'>
                  <label htmlFor='email-address' className='block text-sm font-medium text-gray-700 dark:text-white'>Email address</label>
                  <input
                    type='text'
                    name='user[email]'
                    id='email-address'
                    autoComplete='email'
                    placeholder='john@doe.com'
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='password' className='block text-sm font-medium text-gray-700 dark:text-white'>Password</label>
                  <input
                    type='password'
                    name='user[password]'
                    id='password'
                    placeholder='123456'
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='passwordConfirm' className='block text-sm font-medium text-gray-700 dark:text-white'>Password Confirmation</label>
                  <input
                    type='password'
                    name='user[password_confirm]'
                    id='passwordConfirm'
                    placeholder='123456'
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2'
                  />
                </div>

                <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Avatar
              </label>
              <Dropzone setAvatar={setAvatar} />
              </div>

              </div>
            </div>
            <div className='py-5 text-right'>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Registration
