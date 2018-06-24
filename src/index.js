import React from 'react';
import ReactDOM from 'react-dom';
import SomeComponent from './components/SomeComponent';

const title = 'Template Title';

ReactDOM.render(
  <div>
    {title}
    <SomeComponent />
  </div>,
  document.getElementById('app')
);

module.hot.accept();