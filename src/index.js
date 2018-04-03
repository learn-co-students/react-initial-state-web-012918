import React from 'react';
import ReactDOM from 'react-dom';
import ToggleButton from "../src/components/ToggleButton.js"
import Address from "../src/components/Address.js"

ReactDOM.render(
  <ToggleButton />,
  document.getElementById('root')
);

ReactDOM.render(
  <Address
    street="Santa Monica Blvd."
    city="Santa Monica"
  />,
  document.getElementById('root')
);
