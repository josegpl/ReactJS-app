import React from 'react';
import Post from './Post';

import { Tag } from './styles';

import { Bd } from './styles';

import { Title } from './styles';

export default class App extends React.Component {
  render() {
    return(
      <Bd>
      <Title> E vamos de app de novo</Title>
      <Tag><Post title = "Post 1"/></Tag>
      
      <Tag><Post title = "Post 2"/></Tag>
      
      <Tag><Post title = "Post 3"/></Tag>
      
      <Tag><Post title = "Post 4"/></Tag>
      
      </Bd>
    )
  }
}