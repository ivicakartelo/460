import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import BlogPost from './components/BlogPost'
import BlogpostsMenu from './components/BlogpostsMenu'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import blogposts from './components/blogposts-data'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route
        index
        element={
          <BlogpostsMenu blogposts={ blogposts } />
        }
      />
      <Route path=":id" element={<BlogPost blogposts={ blogposts } />} />
    </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
