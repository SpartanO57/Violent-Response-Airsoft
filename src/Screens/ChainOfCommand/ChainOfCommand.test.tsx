import React from 'react';
import ReactDOM from 'react-dom';
import ChainOfCommand from './ChainOfCommand';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChainOfCommand />, div);
  ReactDOM.unmountComponentAtNode(div);
});
