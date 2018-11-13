import Logo from './components/Logo'
import React from 'react';
import ReactDOM from 'react-dom';
import Whinepad from './components/Whinepad';
import schema from './schema';

var data = JSON.parse(localStorage.getItem('data'));
if (!data) {
  data = {};
  schema.forEach(item => data[item.id] = item.sample);
  data = [data];
}

// read sample data from schema
ReactDOM.render(
  <div>
    <div className="app-header">
      <Logo />Whinepadようこそ!
    </div>
    <Whinepad schema={schema} initialData={data} />  
  </div>,
  document.getElementById('pad')
);