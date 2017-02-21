//Import StyleSheet component from React Native
import {StyleSheet} from 'react-native';

var Style = StyleSheet.create({

  rootContainer: {

    flex: 1

  },

  displayContainer: {

    flex: 2,
    backgroundColor: '#193441'

  },

  inputContainer: {

    flex:8,
    backgroundColor: '#3E606F'

  }

});

//Export Style variable so other source files can use it
export default Style;
