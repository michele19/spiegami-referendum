import React from 'react';
import AppBar from 'material-ui/AppBar';

const MainAppBar = (props) => (
  <AppBar
    title={props.title}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap={props.onCloseTouch}
  />
);

export default MainAppBar;
