import React, { Component } from 'react';
import './About.css';
import {Container, Header, Transition, Divider, PlaceholderParagraph, Placeholder} from 'semantic-ui-react';

interface State {
  loaded: boolean;
}

class About extends Component<{},State> {
  public state: State = {
    loaded: false,
  }

  componentDidMount(){
    this.setState({loaded: true});
  }

  componentWillUnmount(){
    this.setState({loaded: false});
  }

  render() {
    return (
      <Transition visible={this.state.loaded} animation="fade" duration='500'>
      <Container>
        <Header as='h2'>About</Header>
        <Divider>
          <Placeholder inverted>
          <Placeholder.Image/>
          <PlaceholderParagraph>
            <Placeholder.Line/>
            <Placeholder.Line/>
            <Placeholder.Line/>
            <Placeholder.Line/>
            <Placeholder.Line/>
            <Placeholder.Line/>
          </PlaceholderParagraph>
          </Placeholder>
        
        </Divider>
      </Container>
      </Transition>
    );
  }
}

export default About;
