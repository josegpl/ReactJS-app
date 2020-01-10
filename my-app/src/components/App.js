import React from 'react';
import Post from './Post';


export default class App extends React.Component {
  render() {
    return(
      <div>
      <h2> E vamos de app de novo</h2>
      <Post title = "Post 1"/>
      
      <Post title = "Post 2"/>
      
      <Post title = "Post 3"/>
      
      <Post title = "Post 4"/>
      
      </div>
    )
  }
}