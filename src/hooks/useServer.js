import useAuth from './useAuth'
import Http from '../services/httpService'

function useServer () {
  const { setUser } = useAuth()

  const handleResponse = ({ body, loading, error }) => {
    if (body?.code === 200) {
      const user = body.data.user
      setUser({ ...user })
    }

    return { error, body, loading }
  }

  return {
    get: ({ url }) => Http({ method: 'GET', url }).then(handleResponse),
    post: ({ url, body }) => Http({ method: 'POST', url, body }).then(handleResponse),
    put: ({ url, body }) => Http({ method: 'PUT', url, body }).then(handleResponse),
    patch: ({ url, body }) => Http({ method: 'PATCH', url, body }).then(handleResponse),
    delete: ({ url }) => Http({ method: 'DELETE', url }).then(handleResponse)
  }
}

export default useServer
