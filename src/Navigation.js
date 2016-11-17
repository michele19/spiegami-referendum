import React, { Component } from 'react';
import MainAppBar from './MainAppBar.js'
import LateralMenu from './LateralMenu.js'

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    }
  }

  handleDrawerToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});

  render() {
    return (
      <div>
        <MainAppBar
          title="Senato - Ruolo e funzioni"
          onCloseTouch={this.handleDrawerToggle}
        />
        <LateralMenu
          open={this.state.drawerOpen}
          onTouchTap={this.handleDrawerToggle}
        />
      </div>
    );
  }
}

