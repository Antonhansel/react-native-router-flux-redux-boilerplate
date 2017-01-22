import React, {
  Component,
} from 'react';

import {
  Router,
  Scene,
} from 'react-native-router-flux';

import { connect } from 'react-redux';

import welcomeScreen from './business/welcomeScreen/containerFactory';

function mapStateToProps() {
  return {}
}

class Routes extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Scene key="root">
          <Scene key="welcomeScreen" initial={true} component={welcomeScreen} title="Welcome" type="reset"/>
        </Scene>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(Routes);
