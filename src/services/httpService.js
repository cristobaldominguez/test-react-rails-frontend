import { apiUrl } from '../config'

async function Http ({ method = 'GET', url = '/', body = null }) {
  if (!url.startsWith('/')) throw new Error('URL must start with /')

  const isFormData = body instanceof FormData
  const fullURL = new URL(apiUrl + url)
  const config = {
    method,
    headers: {
      Accept: 'application/json',
    },
    redirect: "follow"
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
    const body = await response.json()
    if (!response.ok) throw body.error

    return { body: body.status, loading: false, error: null }
  } catch (error) {
    return { body: null, loading: false, error }
  }
}

export default Http
