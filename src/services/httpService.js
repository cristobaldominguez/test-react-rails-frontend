import { apiUrl } from '../config'

async function Http ({ method = 'GET', url = '/boards', token = null, body = null }) {
  if (!url.startsWith('/')) throw new Error('URL must start with /')

  const isFormData = body instanceof FormData
  const fullURL = new URL(apiUrl + url)
  const config = {
    method,
    headers: {
      Accept: 'application/json'
    }
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  if (!isFormData) {
    config.headers['Content-Type'] = 'application/json'
  }

  if (body && !isFormData) {
    config.body = JSON.stringify(body)
  }

  if (body && isFormData) {
    config.body = body
  }

  try {
    const response = await fetch(fullURL.href, config)
    const data = await response.json()
    if (!response.ok) throw data.error

    return { data, loading: false, error: null }
  } catch (error) {
    return { data: null, loading: false, error }
  }
}

export default Http
