import useAuth from './useAuth'
import Http from '../services/httpService'

function useServer () {
  const { token, setUser } = useAuth()

  const handleResponse = ({ data, loading, error }) => {
    console.log({data })

    if (data?.user && data?.accessToken) {
      setUser({ ...data })
    }

    return { error, data, loading }
  }

  return {
    get: ({ url }) => Http({ method: 'GET', url, token }).then(handleResponse),
    post: ({ url, body }) => Http({ method: 'POST', token, url, body }).then(handleResponse),
    put: ({ url, body }) => Http({ method: 'PUT', token, url, body }).then(handleResponse),
    patch: ({ url, body }) => Http({ method: 'PATCH', token, url, body }).then(handleResponse),
    delete: ({ url }) => Http({ method: 'DELETE', token, url }).then(handleResponse)
  }
}

export default useServer
