import { useEffect, useState } from 'react'
import useServer from '../../hooks/useServer.js'
import Post from '../../components/Post/index.jsx'

function Home () {
  const [posts, setPosts] = useState()
  const { get } = useServer()

  const getPosts = async () => {
    const { body: { data } } = await get({ url: '/posts' })
    setPosts(data.posts)
  }

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    console.log({ posts })
  }, [posts])

  return (
    <>
      <div className='grid max-w-lg m-auto gap-20'>
        {posts && posts.map(post => <Post key={post.id} {...post} />)}
      </div>
    </>
  )
}

export default Home
