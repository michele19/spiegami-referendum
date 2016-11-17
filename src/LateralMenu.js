import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import NavLink from './NavLink'

export default class LateralMenu extends React.Component {

  render() {
    return (
      <div>
        <Drawer open={this.props.open}>
          <AppBar
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            onTouchTap={this.props.onTouchTap}
          />
          <ListItem
            key="senato"
            primaryText="Senato"
            primaryTogglesNestedList
            open
            nestedItems={[
              <MenuItem containerElement={<NavLink to="/referendum/senato/ruolo_e_funzioni" />} key="ruolo_e_funzioni" primaryText="Ruolo e funzioni" />,
              <MenuItem containerElement={<NavLink to="/referendum/senato/modalità_di_elezione" />} key="modalità_di_elezione" primaryText="Modalità di elezione" />,
              <MenuItem disabled key="il_procedimento_legislativo" primaryText="Il procedimento legislativo" />,
              <MenuItem disabled key="i_diritti_dei_senatori" primaryText="I diritti dei senatori" />
            ]}
          />
          <Divider />
          <MenuItem key="stato_regioni" disabled={true}>Rapporto Stato - Regioni</MenuItem>
          <Divider />
          <MenuItem key="resto" disabled={true}>Il resto</MenuItem>
          <Divider />
          <MenuItem key="politiche" disabled={true}>Questioni politiche</MenuItem>
          <Divider />
        </Drawer>
      </div>
    );
  }
}