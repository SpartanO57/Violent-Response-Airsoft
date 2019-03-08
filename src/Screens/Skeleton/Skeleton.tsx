import React, { Component } from "react";
import "./Skeleton.css";
import { Container, Header, Transition } from "semantic-ui-react";

interface State {
  loaded: boolean;
}
class Skeleton extends Component<{},State> {
  
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
          <Header as="h2">Skeleton</Header>
        </Container>
      </Transition>
    );
  }
}

export default Skeleton;
