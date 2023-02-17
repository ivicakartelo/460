import React from 'react';
import ReactDOM from 'react-dom/client';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
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
  
)
