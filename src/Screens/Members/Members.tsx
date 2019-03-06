import React, { Component } from 'react';
import './Members.css';
import {Container, Header, Card, CardContent, List} from 'semantic-ui-react';
import { Member } from '../../Models/Member';
import { MembersRepository } from '../../Repository/MembersRepository';
import { Weapon } from '../../Models/Weapon';

interface State {
  members: Member[];
}

class Members extends Component<{},State> {
  public state: State = {
    members: new MembersRepository().getAllMembers()
  }
  
  render() {
    return (
      <Container>
        <Header as='h2'>Members</Header>
        <Container>
          <Card.Group>
            {this.state.members.map((member: Member) => {
              return (
                <Card key={member.id}>
                  <Card.Content>
                    {/* <Image src={} size='medium'/> */}
                    <Card.Header>
                      {member.callSign}
                    </Card.Header>
                    <Card.Meta>
                      {member.rank}
                    </Card.Meta>
                    <Card.Description>
                    {`${member.firstName} ${member.lastName}`}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Card.Description>
                      Weapons
                    </Card.Description>
                    <List>
                      {member.weapons ? member.weapons.map((weapon: Weapon) => <List.Icon>{weapon.name}</List.Icon>) : ''}
                    </List>
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

export default Members;
