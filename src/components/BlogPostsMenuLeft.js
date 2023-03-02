import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function BlogPostsMenuLeft({ blogposts }) {
/*
    useEffect(() => {
        alert('Component BlogPostsMenuLeft.js has finished rendering!')
      })
*/
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