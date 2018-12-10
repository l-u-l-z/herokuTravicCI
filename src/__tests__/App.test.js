import React from 'react';
import ReactDOM from 'react-dom';

const Temp = () => (
  <div>
    <p>JUST TESTING</p>
  </div>
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Temp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
