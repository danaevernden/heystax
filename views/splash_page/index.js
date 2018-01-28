import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Avatar, View } from 'native-base';



//cool logo here!
//add fb/google login here!
export default class SplashPage extends React.Component {
  render() {

    return (
      <View style={styles.container}>
      <Image source={require('../../images/splash_logo.png')}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
