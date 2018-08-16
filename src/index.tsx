// let React = require('react');
// let ReactDOM = require('react-dom');
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/Hello';

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById('app')
);
