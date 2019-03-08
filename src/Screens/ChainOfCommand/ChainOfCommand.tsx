import React, { Component } from "react";
import "./ChainOfCommand.css";
import { Container, Header, Transition } from "semantic-ui-react";

interface State {
  loaded: boolean;
}

class ChainOfCommand extends Component<{},State> {

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
          <Header textAlign="center" as="h2">
            Chain Of Command
          </Header>
        </Container>
      </Transition>
    );
  }
}

export default ChainOfCommand;
