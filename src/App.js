import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";



function App() {

  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect (()=>{
    axios.get(`${baseURL}/asdf`).then((res)=>{
      setPost(res.data);
    }).catch(error =>{
      setError(error);
    })
  }, [])

  function createPost(){
    axios.post(baseURL, {
      title: 'Hello World !',
      body: 'this is a new post'
    })
    .then((response) =>{
      setPost(response.data);
    })
  }

  function updatePost(){
    axios.put(`${baseURL}/1`, {
      title: 'Hello world!',
      body: 'This is an updated post.'
    })
    .then((response)=>{
      setPost(response.data)
    })
  }

  function deletePost(){
    axios
    .delete(`${baseURL}/1`)
    .then(()=>{
      alert("post deleted!")
      setPost(null)
    })
  }

  if(error) return `Error: ${error.message}`;
  if(!post) return "No Post!";
  
  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}

export default App;
