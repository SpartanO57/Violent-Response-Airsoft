import React, { Component } from "react";
import "./Contact.css";
import { Container, Header, Transition } from "semantic-ui-react";

interface State {
  loaded: boolean;
}

class Contact extends Component<{},State> {

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
      <Transition visible={this.state.loaded} animation="fade" duration="500">
        <Container>
          <Header as="h2">Contact</Header>
        </Container>
      </Transition>
    );
  }
}

export default Contact;
