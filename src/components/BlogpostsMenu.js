import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'

function BlogpostsMenu({ blogposts }) {
/*
    useEffect(() => {
        alert('Component BlogPostsMenu.js has finished rendering!')
      })
 */     

    return (
    <>
    {blogposts.map((post) =>
    <div key={post.id}> 
        <h1><Link to={`/${post.id}`}>
            {post.heading}
        </Link></h1>
        <img src={post.image} />
        <p>{post.blogpost[0].substring(0, 150)}...</p>
    </div> 
    )}
    </>
    ) 
}
export default BlogpostsMenu