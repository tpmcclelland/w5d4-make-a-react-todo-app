//Loading other libraries
import React from 'react'
import ReactDOM from 'react-dom'
import Posts from '../components/Posts'

function renderView(data) {
    //normally will only have this one time per application
    //can only mount one single component
    ReactDOM.render(<Posts data={data} />, document.getElementById('posts'))
}

renderView(posts)
