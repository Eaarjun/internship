import React, { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import Destination from './components/Destination'
import Blog from './components/Blog'
import PostBlog from './components/postBlog'
import SubscribeNewsletter from './components/SubscribeNewsletter'

function App() {

  return (
    <>
    <NavBar />
    <Intro />
    <Destination />
    <Blog />
    <PostBlog />
    <SubscribeNewsletter />
    </>
  )
}

export default App
