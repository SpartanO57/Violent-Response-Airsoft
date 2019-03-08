import React, { Component } from 'react';
import './Members.css';
import {Container, Header, Card, CardContent, List, Transition} from 'semantic-ui-react';
import { Member } from '../../Models/Member';
import { MembersRepository } from '../../Repository/MembersRepository';
import { Weapon } from '../../Models/Weapon';

interface State {
  members: Member[];
  loaded: boolean;
}

class Members extends Component<{},State> {
  public state: State = {
    members: new MembersRepository().getAllMembers(),
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
      <Transition visible={this.state.loaded} animation='fade' duration='500'>
      <Container>
        <Header textAlign='center' as='h2'>Members</Header>
        <Container>
          <Card.Group centered>
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
                      {member.weapons ? member.weapons.map((weapon: Weapon, index: number) => <List.Icon key={weapon.id || index}>{weapon.name}</List.Icon>) : ''}
                    </List>
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

export default Members;
