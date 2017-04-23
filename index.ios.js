
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { CheckBox } from 'react-native-elements'


export default class checkBox extends Component {

  state = {
    icon1State: false,
    icon2State: false
  };

  icon1Pressed = () => {
    if(this.state.icon1State)
      this.setState({icon1State: false})
    else
      this.setState({icon1State: true})
  }

  icon2Pressed = () => {
    if(this.state.icon2State)
      this.setState({icon2State: false})
    else
      this.setState({icon2State: true})
  }

  render() {
    return (
      <View style={styles.container}>
        <CheckBox
          title='Icon1'
          checked={this.state.icon1State}
          onPress={this.icon1Pressed}
        />
        <CheckBox
          title='Icon2'
          checked={this.state.icon2State}
          onPress={this.icon2Pressed}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('checkBox', () => checkBox);
