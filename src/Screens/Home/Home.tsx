import React, { Component } from 'react';
import './Home.css';
import {Container, Header} from 'semantic-ui-react';
class Home extends Component {
  render() {
    return (
      <Container>
        <Header as='h2'>Home</Header>
      </Container>
    );
  }
}

export default Home;
