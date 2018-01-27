import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, DatePickerIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class MyStax extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>my stax are here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
