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

import InputButton from './InputButton.js'

//Define the input buttons that will be displayed in the calculator
const inputButtons = [
//constant can not be changed

  [1,2,3,'/'],
  [4,5,6,'*'],
  [7,8,9,'-'],
  [0,'.', '=', '+']

]

class ReactCalculator extends Component {
//ReactCalculator subclasses the Component class
//and overrides the rendr function to render it's own UI

constructor(props){
//constructor takes a props argument and passes it up to the super constructor

  super(props);

  this.state = {
  //storing type of operation
  //clearing display when arithmetic symbol is selected
  //highlighting the selected symbol
    previousInputValue: 0,
    inputValue:0,
    selectedSymbol: null

  }

}

render() {
     return (
         <View style={Style.rootContainer}>
             <View style={Style.displayContainer}>
                <Text style={Style.displayText}>{this.state.inputValue}</Text>
             </View>
             <View style={Style.inputContainer}>
                 {this._renderInputButtons()}
             </View>
         </View>
     )
 }

  //For each row in inputButtons create a row view and create an InputButton for each input in the row
  _renderInputButtons() {
        let views = [];

        for (var r = 0; r < inputButtons.length; r ++) {
            let row = inputButtons[r];

            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];

                inputRow.push(
                    <InputButton
                      value={input}
                      key={r + "-" + i}
                      onPress={this._onInputButtonPressed.bind(this,input)}
                    />
                );
            }

            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }

        console.log(views);

        return views;

    }

  _onInputButtonPressed(input){

    switch(typeof input){

        case 'number':
          return this._handleNumberInput(input);
        case 'string':
          return this._handleStringInput(input);

    }

  };

  _handleNumberInput(num){

      let inputValue = (this.state.inputValue * 10) + num;

      this.setState({

          inputValue: inputValue

      })

  }

  _handleStringInput(str){

      switch(str){

        case '/':
        case '*':
        case '+':
        case '-':
            this.setState({

                selectedSymbol: str,
                previousInputValue: this.state.inputValue,
                inputValue:0

            })
        case '=':
          let symbol = this.state.selectedSymbol,
              inputValue = this.state.inputValue,
              previousInputValue = this.state.previousInputValue;

          if(!symbol){

              return;

          }

          this.setState({

            previousInputValue: 0,
            inputValue: eval(previousInputValue + symbol + inputValue),
            selectedSymbol: null
          });
        break;
      }

  }

}//class ReactCalculator

//IOS and Android code looks for root component indentified on startup
AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);
