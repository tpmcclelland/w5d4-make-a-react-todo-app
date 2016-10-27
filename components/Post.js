import React, { Component } from 'react'

//if you are immediately returning something with no logic you don't need {} around an arrow function
//can only mount one single component
const Post = (props) => <div className="post">
   {/* Can copy/paste mocked up html from page as a starting point  */}
    <img src={props.data.image} alt={props.data.title} />
    <h3>{props.data.title}</h3>
    <p className="lead"> Published On {props.data.date} at {props.data.time}</p>
    <p>{props.data.body}</p>
     <span className="small">Author: {props.data.author}</span>
   </div>

export default Post
