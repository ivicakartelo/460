import { Link, Outlet } from 'react-router-dom'
import BlogPostsMenuLeft from './components/BlogPostsMenuLeft';
import "./App.css"
import blogposts from './components/blogposts-data'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'

function App() {

  useEffect(() => {
    alert('Component App.js has finished rendering!')
  })
  const order = useRef([]);
      useLayoutEffect(() => {
        order.current.push("Component App");
        return () => {
          order.current.push("Component App (unmount)");
          console.log(order.current);
        };
      }, []);

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