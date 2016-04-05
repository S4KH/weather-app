import React, {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

import Forecast from './Forecast';

class WeatherProject extends Component{
  getInitialState(){
    return ({
      zip: '',
      forecast: {
        main: 'Clouds',
        description: 'few clouds',
        temp: 29
      }
    });
  },
  // Callback to the <TextInput>
  _handleTextChange(event) {

    console.log(event.nativeEvent.text);

    this.setState({
      zip: event.nativeEvent.text
    });
  },
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Your input {this.state.zip}.
        </Text>
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}/>
        <TextInput style={styles.input}
          onSubmitEditing={this._handleTextChange}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D4D4D'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  }
});

module.exports = WeatherProject;
