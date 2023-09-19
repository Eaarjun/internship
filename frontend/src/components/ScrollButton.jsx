import React, { useState } from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';
import styled from 'styled-components';
export const ScrollButton = () => {

    const[visible,setVisible]=useState(false)

    const toggleVisible=()=>{
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 50){
            setVisible(true)
        }
        else if(scrolled <=50){
            setVisible(false)
        }
    };
    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    window.addEventListener('scroll',toggleVisible)

  return (
    
    <Button>
        <FaArrowCircleUp onClick={scrollToTop} style={{display:visible ? 'inline' : 'none'}}></FaArrowCircleUp>
    </Button>
    
  )
}



  

export const Button = styled.div`
   position: fixed; 
   right: 1%;
   bottom: 40px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: green;
`