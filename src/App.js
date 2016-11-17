import React, { Component } from 'react';
import { jsonToMaterial } from './Theorem.js'
import { senato } from './theorems.json'
import Footer from './Footer.js'
import Navigation from './Navigation.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ruolo_e_funzioni_SI: senato.ruolo_e_funzioni_SI,
      ruolo_e_funzioni_NO: senato.ruolo_e_funzioni_NO
    }
  }

  render() {
    return (
      <div>
        <Navigation title="Senato - Ruolo e funzioni" />
        <div className="container">
          <div className="half_column">
            {jsonToMaterial(this.state.ruolo_e_funzioni_SI)}
          </div>
          <div className="divider">
          </div>
          <div className="half_column">
            {jsonToMaterial(this.state.ruolo_e_funzioni_NO)}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
