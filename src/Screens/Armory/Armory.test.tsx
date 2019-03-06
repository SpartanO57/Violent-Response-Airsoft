import React from 'react';
import ReactDOM from 'react-dom';
import Armory from './Armory';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Armory />, div);
  ReactDOM.unmountComponentAtNode(div);
});
