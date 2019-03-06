import React from 'react';
import ReactDOM from 'react-dom';
import Members from './Members';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Members />, div);
  ReactDOM.unmountComponentAtNode(div);
});
