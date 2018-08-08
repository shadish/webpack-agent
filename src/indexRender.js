import React from 'react';
import ReactDOM from 'react-dom';
import SomeComponent from './components/SomeComponent';
import './css/some-style.css';
import './less/style.less';
import './fonts/alex-brush-v8-latin-regular.woff2';

const title = 'Template Title';

export const render = () => {
  ReactDOM.render(
    <div>
      {title}
      <SomeComponent />
    </div>,
    document.getElementById('app')
  );
};

module.hot.accept();
