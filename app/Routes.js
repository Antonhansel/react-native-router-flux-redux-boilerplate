import React, {
  Component,
  PropTypes
} from 'react';

import {
  Router,
  Scene,
} from 'react-native-router-flux';

import { connect } from 'react-redux';

import welcomeScreen from './business/welcomeScreen/containerFactory';
console.log(welcomeScreen);

function mapStateToProps(state) {
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
