import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';

export default class Home extends Component {
  
  static navigationOptions = {
    headerTitle: "New Debit",
    headerTransparent: true,
    headerRight: (
      //Btn Salve New Debit
      <TouchableOpacity onPress={ () => {} }> 
        <Text style={ {paddingRight:20, color:"#9d00dE", fontSize:15} }>Save</Text>
      </TouchableOpacity>
      ),
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
          />
          <TextField
            label='Value'
          />
          <Dropdown
          label='Categories'
          data={categories}
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