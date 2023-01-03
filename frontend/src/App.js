import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {

  const [post, setPost]= useState([])
  // const senddata = (e) => {
  //   e.preventDefault()
  //   axios.post('http://localhost:8000/api/v1/student/create/', {
  //   }).then((respons) => { setPost(respons) })
  //     .then((err) => { console.log(err) })
  // }


  const fetchData = () => {
    axios.get('http://localhost:8000/api/v1/student/'
    ).then((Response) => setPost(Response.data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
      fetchData()
},[])

  return (
          <div>
          {post.map((post) => {
           return <ul>
          <h1 > {post.name} <br /> {post.grade}<br /></h1>
          </ul>
       })}
          </div>

  );


}

export default App;
