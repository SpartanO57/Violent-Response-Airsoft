import React, { Component } from "react";
import "./Events.css";
import { Container, Header, Transition } from "semantic-ui-react";

interface State {
  loaded: boolean;
}

class Events extends Component<{},State> {

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
      <Transition visible={this.state.loaded} duration="500" animation="fade">
        <Container>
          <Header as="h2">Events</Header>
        </Container>
      </Transition>
    );
  }
}

export default Events;
