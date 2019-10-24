import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';

export default class NewDebt extends Component {

  handleChange = input => {

    const { navigation } = this.props;

    const { onHandleChange } = navigation.getParam('events');

    onHandleChange(input);

  }

  handleSubmit = ()  => {

    const { navigation } = this.props;

    const {onHandleSubmit} = navigation.getParam('events', null);

    onHandleSubmit();

    navigation.navigate('Home');

  }

  static navigationOptions = {
    headerTitle: "New Debit",
    headerTransparent: true,
  };

  render() {

    let categories = [{
      value: 'Lazer',
    }, {
      value: 'Food',
    }, {
      value: 'Travel',
    }];

    return (
      <View style={styles.container}>

        <Text style={styles.text}>Whrite the form to add a new debt.</Text>
        
        <TextField
          label='Description'
          onChangeText={ (value) => this.handleChange({name:'description', value: value}) }
        />

        <TextField
          label='Value'
          onChangeText={ (value) => this.handleChange({name:'value', value: value}) }
        />

        <Dropdown
          label='Categories'
          data={categories}
          onChangeText={ (value) => this.handleChange({name:'category', value: value}) }
        />

        <Button
          onPress={ this.handleSubmit }
          title="Save"
          color="#841584"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // Flex
    flex:1,

    // Alignment

    // Layout
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 0,
    backgroundColor: '#F9F9F9',
  },
  text: {
    //Alignment
    alignSelf: 'center',

    //Layout
    marginTop:100,
    marginBottom:20,
  }
});