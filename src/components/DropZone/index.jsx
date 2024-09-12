import PropTypes from 'prop-types'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { PhotoIcon } from '@heroicons/react/24/solid'

import css from './styles.module.css'

function Dropzone ({ setAvatar }) {
  const onDrop = useCallback(acceptedFiles => {
    setAvatar(acceptedFiles[0])
  }, [setAvatar])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className={`${css.dropzone} ${isDragActive && css.hover}`} {...getRootProps()}>
      <div className='text-center'>
        <PhotoIcon aria-hidden='true' className='mx-auto h-12 w-12 text-gray-300' />
        <div className='mt-4 flex text-sm leading-6 text-gray-600 dark:text-white'>
          <label htmlFor='file-upload' className={css.label}>
            <span>Upload a file</span>
            <input {...getInputProps()} id='file-upload' name='user[avatar]' type='file' className='sr-only' />
          </label>
          <p className='pl-1'>or drag and drop</p>
        </div>
        <p className='text-xs leading-5 text-gray-600 dark:text-white'>PNG, JPG, GIF up to 10MB</p>
      </div>
    </div>
  )
}

Dropzone.propTypes = {
  setAvatar: PropTypes.func
}

export default Dropzone
