import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Card extends Component {



  render() {
    return( 
      <View style={styles.card}>
        {this.props.children}       
      </View>
    );
  }
}

const styles = StyleSheet.create({
    card: {
      // Flex

      // Alignment
      
      // Layout
      backgroundColor: "#FFFFFF",
      
      borderRadius: 5,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.10,
      shadowRadius: 3.84,
      elevation: 5,
    },
});