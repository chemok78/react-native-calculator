//Import react libraries and components
import React, { Component } from 'react';
import {

  View,
  Text,
  TouchableHighlight

} from 'react-native';

//Import Stylesheet to use for buttons
import Style from './Style';

//create InputButton class and export it at the same time
export default class InputButton extends Component {

  render(){

    return (
      <TouchableHighlight
        style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]}
        underlayColor="#193441"
        onPress={this.props.onPress}
      >
                 <Text style={Style.inputButtonText}>{this.props.value}</Text>
      </TouchableHighlight>
    )

  }//render

}//class InputButton
