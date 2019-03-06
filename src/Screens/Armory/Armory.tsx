import React, { Component } from "react";
import "./Armory.css";
import { Container, Header, Card, Image, List } from "semantic-ui-react";
import { Weapon } from "../../Models/Weapon";
import MembersData from "../../Data/Members";
import { MembersRepository } from "../../Repository/MembersRepository";

interface State {
  weapons: Weapon[];
}

class Armory extends Component<{}, State> {
  public state: State = {
    weapons: new MembersRepository().getWeaponList()
  };

  render() {
    return (
      <Container>
        <Header as="h2">Armory</Header>
        <Container>
          <Card.Group>
            {this.state.weapons.map((weapon: Weapon) => {
              return (
                <Card key={weapon.id}>
                  <Card.Content>
                    <Image src={weapon.image} size='medium'/>
                    <Card.Header>
                      {weapon.name}{" "}
                      {weapon.manufacturer ? `(${weapon.manufacturer})` : ""}
                    </Card.Header>
                    <Card.Meta>
                      Attachments
                      <List>
                        {weapon.attachments ? weapon.attachments.map(attachment => <List.Item>{attachment}</List.Item>) : ''}
                      </List>
                    </Card.Meta>
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Group>
        </Container>
      </Container>
    );
  }
}

export default Armory;
