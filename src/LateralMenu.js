import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ActionFeedback from 'material-ui/svg-icons/action/feedback';

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
              <MenuItem
                containerElement={<NavLink to="/referendum/senato/ruolo_e_funzioni" />}
                key="ruolo_e_funzioni"
                primaryText="Ruolo e funzioni"
              />,
              <MenuItem
                containerElement={<NavLink to="/referendum/senato/modalità_di_elezione" />}
                key="modalità_di_elezione"
                primaryText="Modalità di elezione"
              />,
              <MenuItem
                containerElement={<NavLink to="/referendum/senato/il_procedimento_legislativo" />}
                key="il_procedimento_legislativo"
                primaryText="Il procedimento legislativo"
              />,
              <MenuItem
                containerElement={<NavLink to="/referendum/senato/diritti_dei_senatori_e_statuto_delle_minoranze" />}
                key="diritti_dei_senatori_e_statuto_delle_minoranze"
                primaryText="I diritti dei senatori"
              />
            ]}
          />
          <Divider />
          <ListItem
            key="stato-regioni"
            primaryText="Rapporto Stato - Regioni"
            primaryTogglesNestedList
            nestedItems={[
              <MenuItem
                containerElement={<NavLink to="/referendum/stato-regioni/il_procedimento_legislativo" />}
                key="il_procedimento_legislativo"
                primaryText="Il procedimento legislativo"
                rightIcon={<ActionFeedback/>}
              />
            ]}
          />
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