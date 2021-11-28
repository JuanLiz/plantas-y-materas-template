import React from 'react';
import ReactDOM from 'react-dom';
import {Auth0Provider} from "@auth0/auth0-react"

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap/css/bootstrap.css';
import './assets/index.css';

import Router from './Router';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-eztzjjr2.us.auth0.com" clientId="JR6zyuOfrnq8i3NIaNpatABMsTUFmFzi" redirectUri={window.location.origin+'/city'}>
      <Router/>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
