import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'

function BlogPostsMenuLeft({ blogposts }) {

    useEffect(() => {
        alert('Component BlogPostsMenuLeft.js has finished rendering!')
      })
      const order = useRef([]);
      useLayoutEffect(() => {
        order.current.push("Component BlogPostMenuLeft");
        return () => {
          order.current.push("Component BlogPostMenuLeft (unmount)");
          console.log(order.current);
        };
      }, []);

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