import { Link } from "react-router-dom";
import React from "react";
import { Icon, Segment, Container } from "semantic-ui-react";

export default [
  {
    key: "home",
    name: "Home",
    as: Link,
    to: "/",
    content: <Segment basic={true}><Icon name='home'/>Home</Segment>
  },
  { key: "about", name: "About", as: Link, to: "/about",
 content: <Segment basic={true}><Icon name='info'/>About</Segment>
},
  { key: "armory", name: "Armory", as: Link, to: "/armory",
  content: <Segment basic={true}><Icon name='shield'/>Armory</Segment>
},
  {
    key: "chain-of-command",
    name: "Chain of Command",
    as: Link,
    to: "/chain-of-command",
    content: <Segment basic={true}><Icon name='chain'/>Chain of Command</Segment>

  },
  {
    key: "contact",
    name: "Contact",
    as: Link,
    to: "/contact",
    content: <Segment basic={true}><Icon name='mail'/>Contact</Segment>

  },
  { key: "events",  name: "Events", as: Link, to: "/events",
  content: <Segment basic={true}><Icon name='calendar alternate'/>Events</Segment>
},
  {
    key: "members",
    name: "Members",
    as: Link,
    to: "/members",
    content: <Segment basic={true}><Icon name='group'/>Members</Segment>

  }
];


