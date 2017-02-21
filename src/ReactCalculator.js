//Import React and Component from react package
import React, { Component } from 'react';
//Import Text and AppRegistry from react-native package
import {

  Text,
  AppRegistry,
  View

} from 'react-native';

import Style from './Style.js';
//import stylesheet in Style variable in Style.js file

class ReactCalculator extends Component {
//ReactCalculator subclasses the Component class
//and overrides the rendr function to render it's own UI

render() {
  return (
      <View style={Style.rootContainer}>
          <View style={Style.displayContainer}></View>
          <View style={Style.inputContainer}></View>
      </View>
    )
  };


}//class ReactCalculator

//IOS and Android code looks for root component indentified on startup
AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);
