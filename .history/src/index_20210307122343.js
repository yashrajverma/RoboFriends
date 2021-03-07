import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './card'
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(

    <div>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>,
  document.getElementById('root')
);
reportWebVitals();
