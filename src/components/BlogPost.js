import { useParams } from 'react-router-dom'

function BlogPost({ blogposts }) {
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