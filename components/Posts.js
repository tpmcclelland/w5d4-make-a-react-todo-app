import React, { Component } from 'react'
import Post from './Post'

//Stateless components
const Posts = (props) => {
    const PostItems = props.data.map((post, i) => {
        return <Post data={post} key={i} />
    })

    //can only one single component which in this case and most cases will be a <div>
    return <div>
        {PostItems}
    </div>
}

export default Posts
