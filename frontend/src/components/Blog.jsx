import React, { useEffect, useState } from "react";
import "./blog.css";

const Blog = () => {
  const [data, setData] = useState([]);

    const blogPost = () => {
      fetch("https://travel-blog-5x6n.onrender.com/"),{
        mode:"cors"
      }
      
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
        });
    };
  
    useEffect(() => {
      blogPost();
    });
  return (
    <>
      <h1 className="heading" id="blog">Blog</h1>
      <div className="container">
        {data.map((e,key) => (
          <div className="item" key={key}>
            <h2>{e.title}</h2>
            <div className="item-set">
            <p>{e.content}</p>
            <h4>-{e.author}</h4>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default Blog;
