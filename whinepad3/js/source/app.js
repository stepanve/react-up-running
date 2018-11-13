/* @flow */

'use strict';

import Logo from './components/Logo';
import React from 'react';
import ReactDOM from 'react-dom';
import CRUDStore from './flux/CRUDStore';
import Whinepad from './components/Whinepad';
import schema from './schema';


ReactDOM.render(
  <div>
    <div className="app-header">
      <Logo/> Welcome to Whinepad!
    </div>
    <Whinepad schema={schema} initialData={data} />
  </div>,
  document.getElementById('pad')
);
