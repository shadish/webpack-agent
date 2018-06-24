import React from 'react';
import ReactDOM from 'react-dom';
import SomeComponent from './components/SomeComponent';
import './css/some-style.css';

const title = 'Template Title';

ReactDOM.render(
  <div>
    {title}
    <SomeComponent />
  </div>,
  document.getElementById('app')
);

module.hot.accept();