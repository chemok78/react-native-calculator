//Import react libraries and components
import React, { Component } from 'react';
import {

  View,
  Text

} from 'react-native';

//Import Stylesheet to use for buttons
import Style from './Style';

//create InputButton class and export it at the same time
export default class InputButton extends Component {

  render(){

    return (

      <View style={Style.inputButton}>
        <Text style={Style.inputButtonText}>{this.props.value}</Text>
        //when rendering inputButton give it a prop value to use the data here
        //using styles in stylesheet file
      </View>
    )

  }//render

}//class InputButton
