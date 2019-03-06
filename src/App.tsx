import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Header, Container, Grid, Segment, Menu } from "semantic-ui-react";
import Home from "./Screens/Home/Home";
import About from "./Screens/About/About";
import Armory from "./Screens/Armory/Armory";
import ChainOfCommand from "./Screens/ChainOfCommand/ChainOfCommand";
import Contact from "./Screens/Contact/Contact";
import Events from "./Screens/Events/Events";
import Members from "./Screens/Members/Members";
import _findIndex from "lodash/findIndex";
interface IProps {
  activeItem: string;
}

interface IState {
  activeItem: string;
  loaded: boolean;
}

class App extends Component<{}, IState> {
  loaded = false;

  componentDidMount(){
    this.setState({loaded: true});
  }

  render() {
    const navItems = [
      {
        key: "home",
        name: "Home",
        href: "/"
      },
      { key: "about", name: "About", href: "/about" },
      { key: "armory", name: "Armory", href: "/armory" },
      {
        key: "chainOfCommand",
        name: "Chain of Command",
        href: "/chain-of-command"
      },
      { key: "contact", name: "Contact", href: "/contact" },
      { key: "events", name: "Events", href: "/events" },
      { key: "members", name: "Members", href: "/members" }
    ];
    const activeItemIndex = _findIndex(navItems, { href: location.pathname });
    return (
      <Container>
        <Router>
          <Container>
              <Header as="h1">Violent Response Airsoft</Header>
              <Menu activeIndex={activeItemIndex} items={navItems} />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/armory" component={Armory} />
            <Route path="/chain-of-command" component={ChainOfCommand} />
            <Route path="/contact" component={Contact} />
            <Route path="/events" component={Events} />
            <Route path="/members" component={Members} />
          </Container>
        </Router>
      </Container>
    );
  }
}

export default App;
