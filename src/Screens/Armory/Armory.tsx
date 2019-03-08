import React, { Component } from "react";
import "./Armory.css";
import {
  Container,
  Header,
  Card,
  Image,
  List,
  Transition
} from "semantic-ui-react";
import { Weapon } from "../../Models/Weapon";
import MembersData from "../../Data/Members";
import { MembersRepository } from "../../Repository/MembersRepository";

interface State {
  weapons: Weapon[];
  loaded: boolean;
}

class Armory extends Component<{}, State> {
  public state: State = {
    weapons: new MembersRepository().getWeaponList(),
    loaded: false
  };

  componentDidMount() {
    this.setState({ loaded: true });
  }

  componentWillUnmount() {
    this.setState({ loaded: false });
  }

  render() {
    return (
      <Transition
        visible={this.state.loaded}
        as={Container}
        duration="500"
        animation="fade"
      >
        <Container>
          <Header textAlign="center" as="h2">
            Armory
          </Header>
          <Container>
            <Card.Group centered key="weapon.id">
              {this.state.weapons.map((weapon: Weapon, index: number) => {
                return (
                  <Card key={weapon.id || index}>
                    <Card.Content>
                      <Image src={weapon.image} size="medium" />
                      <Card.Header>
                        {weapon.name}{" "}
                        {weapon.manufacturer ? `(${weapon.manufacturer})` : ""}
                      </Card.Header>
                      <Card.Meta>
                        Attachments
                        <List>
                          {weapon.attachments
                            ? weapon.attachments.map((attachment, index) => (
                                <List.Item key={index + attachment}>
                                  {attachment}
                                </List.Item>
                              ))
                            : ""}
                        </List>
                      </Card.Meta>
                    </Card.Content>
                  </Card>
                );
              })}
            </Card.Group>
          </Container>
        </Container>
      </Transition>
    );
  }
}

export default Armory;
