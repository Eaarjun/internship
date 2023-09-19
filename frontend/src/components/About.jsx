import React from 'react'
import styled from 'styled-components'
const About = () => {
  return (
    <div href='#about' id='about'>
        <Tell>
            <h1>About Us</h1>
            <div className='content'>
            <p> Travel Blog is a collective blog of expert travel writers, headed up by experienced travel journalist and editor Duncan Rhodes, who report on trends, experiences, festivals and nocturnal adventures in cities around Europe and the world.

We publish lovingly-compiled ‘Long Weekend’ city guides to all our favourite destinations, as well as fresh and insightful feature articles on the quirkiest crazes, the most intriguing experiences and the best nightlife our boundless curiosity can uncover. (Just hover you mouse over the “Adventures” tab on our top menu to browse recent posts by category). And because everyone needs to smell the flowers – and not the coffee – once in a while, we like to offset our urban Odysseys with the occasional jaunt in the great outdoors in our Escape section.

City breaks are what we live for most of all, and apart from our aforementioned Long Weekend guides, we also list our favourite cities according to theme. Be sure to drop by our favourite budget breaks and romantic destinations.</p>
</div>
        </Tell>

    </div>
  )
}

export default About

const Tell=styled.div`
    h1{
        text-align: center;
        margin: 10px;
    }
    .content {
        border: 1px solid black;
        padding: 10px;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
        margin: 10px;
    }

        `