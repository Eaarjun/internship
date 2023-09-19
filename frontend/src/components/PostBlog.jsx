import axios from "axios";
import React, { useEffect, useState } from "react";
import "./postBlog.css";
const PostBlog = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    author: "",
  });
  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://internship-indol.vercel.app/", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
    <div className="BlogForm">
      <h1>Fill The form to post your data in the blog list</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">  
        Title:<input
        className="title"
          type="text"
          placeholder="Title..."
          onChange={handleInput}
          name="title"
        />
 
        <br />
        Content:
        <textarea
          type="text"
          className="content"
          placeholder="Content..."
          onChange={handleInput}
          name="content"
        />
        <br />
        Author:
        <input
          type="text"
          className="author"
          placeholder="Author..."
          onChange={handleInput}
          name="author"
        />
        <br />
        <button>Submit</button>
        </label>
      </form>
      </div>
    </>
  );
};

export default PostBlog;
