import React from 'react'
import styled from 'styled-components'
const Footer = () => {
    // let myButton = document.getElementById('myBtn');
    // window.onscroll = function() {scrollFunction()}
    // function scrollFunction(){
    //     if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    //         myButton.style.display = "block";
    //     }else{
    //         myButton.style.display = "none";
    //     }
    // }
    // function topFunction(){
    //     document.body.scrollTop =0;
    //     document.documentElement.scrollTop=0;
    // }
  return (
    <div id='contact' >

    <Foot>
        
        
        <h2>Contact US</h2>
        <p>Call<a href="tel:9051290512"> 9051290512</a></p>
        <p>Email <a href="mailto:travel@travel.com">Travel@travel.com</a></p>
        <h4>Travel copyright 2023:&copy;</h4>
       
    </Foot>
    </div>
  )
}

export default Footer

const Foot = styled.div`
    padding: 10px;
    background-color:lightblue;
    h4{
        text-align:center;
    }
    a{
        text-decoration: none;
    }
    @media only screen and (max-width: 600px) {
        h2{
            text-align:center;
            margin: 5px;
        }
        p{
            margin:5px;
        }
    }
`