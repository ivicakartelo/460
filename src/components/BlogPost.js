import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'

function BlogPost({ blogposts }) {

    useEffect(() => {
        alert('Component BlogPost.js has finished rendering!')
      })

    const params = useParams()
    const id = params.id
    const blogpost = blogposts.find(post => post.id === id)

    return (
    <>
        <h1>{blogpost.heading}</h1>
        <img src={blogpost.image} />
        {blogpost.blogpost.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
            ))
        }
    </>
    
    )	
    	
}
export default BlogPost