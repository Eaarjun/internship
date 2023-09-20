import React,{useState} from 'react'
import "./subscribeNewsletter.css"
import axios from 'axios'
const SubscribeNewsletter = () => {

  const [email,setEmail]=useState(
    {
      email:""
    });
    const handleInput = (e) =>{
      setEmail({email:e.target.value})
      
    }
  const onSubmit = (e) => {
    e.preventDefault();
    
    fetch('https://travel-blog-5x6n.onrender.com/email',{
      mode:"cors",  
    method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(email)
    }) 
    .then((res)=> console.log(res))

    .catch((err)=> console.log(err));
    console.log(email);
    // alert("Thank you for subscribing")
  }
  
  return (
    <div>
      
      <div className="news-container">
        <div className="newsletter">
        <h1 style={{textAlign: 'center',margin:'20px'}}>Subscribe To Our Newsletter</h1>
          <form onSubmit={onSubmit}>
            <input className='email' type="email" placeholder="Enter Your Email" onChange={handleInput} name='email' />
          <button > Subscribe</button>
          </form>
        </div>
      </div>
    
    </div>
  )
}

export default SubscribeNewsletter
