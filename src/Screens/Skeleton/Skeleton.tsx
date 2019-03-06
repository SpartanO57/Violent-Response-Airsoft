import React, { Component } from 'react';
import './Skeleton.css';
import {Container, Header} from 'semantic-ui-react';
class Skeleton extends Component {
  render() {
    return (
      <Container>
        <Header as='h2'>Skeleton</Header>
      </Container>
    );
  }
}

export default Skeleton;
