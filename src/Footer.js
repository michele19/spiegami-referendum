import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>Spiegami 2016</p>
        <p>Pensato con amore da <Link to='/about'>Carlo Martinucci</Link></p>
        <p>Materiale sul referendum tratto da <a href="http://www.referendumcostituzionale2016.it/">referendumcostituzionale2016.it</a></p>
      </div>
    );
  }
}
