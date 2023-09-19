import React from 'react'
import NavBar from './NavBar'
import Destination from './Destination'
import Intro from './Intro'
import Blog from './Blog'
import PostBlog from './postBlog'
import SubscribeNewsletter from './SubscribeNewsletter'
import About from './About'
import Footer from './Footer'
import { ScrollButton } from './ScrollButton'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Intro />
        <Destination />
        <Blog />
        <PostBlog/>
        <SubscribeNewsletter/>
        <About/>
        <Footer/>
        <ScrollButton/>
    </div>
  )
}

export default Home