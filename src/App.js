import React, { Component } from 'react';
import Footer from './Footer.js'
import Navigation from './Navigation.js'
import { getTitle } from './stringHelper.js'

class App extends Component {

  render() {
    return (
      <div>
        <Navigation title={getTitle(this.props.params.tema, this.props.params.argomento)} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
