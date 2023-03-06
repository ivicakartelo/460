import { Link, Outlet } from 'react-router-dom'
import BlogPostsMenuLeft from './components/BlogPostsMenuLeft';
import "./App.css"
import blogposts from './components/blogposts-data'

function App() {

  return (
    <div className="container">
      <div className="grid_6 last">
        <Link to="/">Home</Link>
      </div>
      <div className="grid_2">
        <BlogPostsMenuLeft blogposts={ blogposts }/>
      </div>
      <div className="grid_4 last">
        <Outlet />
      </div>
    </div> 
  )
}
export default App