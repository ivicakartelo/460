import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function BlogPostsMenuLeft({ blogposts }) {

    
  useEffect(() => {
    alert('Component BlogpostsMenuLeft.js has finished rendering!')
  })
  

    return (   
        <ul>
            {blogposts.map((post) => 
                <li key={post.id}>
                    <Link to={`/${post.id}`}>
                    {post.heading}
                    </Link>
                </li>
                )
            }
        </ul>
    )  
}
export default BlogPostsMenuLeft