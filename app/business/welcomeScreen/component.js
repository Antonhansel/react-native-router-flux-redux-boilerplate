import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Hello :) </Text>
      </View>
    )
  }
}

export default WelcomeScreen;
