import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'

import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';
import About from './About'
import Argomento from './Argomento'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
	  <Router history={hashHistory}>
      <Route path="/" component={App}>
      	<IndexRedirect to="/referendum/senato/ruolo_e_funzioni" />
      	<Route path="/referendum/:tema/:argomento" component={Argomento}/>
		    <Route path="/about" component={About}/>
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
