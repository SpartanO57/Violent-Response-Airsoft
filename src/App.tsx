import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Header, Container, Grid, Segment, Menu, MenuMenuProps, Transition } from "semantic-ui-react";
import Home from "./Screens/Home/Home";
import About from "./Screens/About/About";
import Armory from "./Screens/Armory/Armory";
import ChainOfCommand from "./Screens/ChainOfCommand/ChainOfCommand";
import Contact from "./Screens/Contact/Contact";
import Events from "./Screens/Events/Events";
import Members from "./Screens/Members/Members";
import _findIndex from "lodash/findIndex";
import NavigationMenuData from './Data/NavigationMenu';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
interface State {
  activeItemIndex: number;
  loaded: boolean;
  navItems: MenuMenuProps[]
}

class App extends Component<{}, State> {
  public state: State = {
    loaded: false,
    navItems: NavigationMenuData,
    activeItemIndex: _findIndex(NavigationMenuData, { key: location.pathname.replace('/','') }),
  }

  componentDidMount(){
    this.setState({loaded: true});
  }

  render() {


    return !this.state.loaded ? '' : (
      <Container>
        <Router>
          <Container>
              <Header as="h1">Violent Response Airsoft</Header>
              <Menu onItemClick={(event, props)=>this.setState({activeItemIndex: props.index || this.state.activeItemIndex})} stackable activeIndex={this.state.activeItemIndex} items={this.state.navItems} />
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
