import React, { Component } from 'react'
import { jsonToMaterial } from './Theorem.js'
import { referendum } from './theorems.json'

export default class Argomento extends Component {
  render() {
    const tema = this.props.params.tema
    const argomento = this.props.params.argomento
    return (
    	<div className="container">
    	  <div className="half_column">
          {jsonToMaterial(referendum[tema][argomento + "_SI"])}
    	  </div>
    	  <div className="divider">
    	  </div>
    	  <div className="half_column">
    	    {jsonToMaterial(referendum[tema][argomento + "_NO"])}
    	  </div>
    	</div>
    )
  }
}