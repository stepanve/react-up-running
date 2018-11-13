import Excel from './components/Excel';
import Logo from './components/Logo'
import React from 'react';
import ReactDOM from 'react-dom';

var headers = localStorage.getItem('headers');
var data = localStorage.getItem('data');

if(!headers) {
  headers = ['タイトル', '年', '評価', 'コメント'];
  data = [['タイトル', '2015', '3', 'あああ']];
}

ReactDOM.render(
  <div>
    <h1>
      <Logo />Whinepadようこそ!
    </h1>
    <Excel headers={headers} initialData={data} />  
  </div>,
  document.getElementById('pad')
);