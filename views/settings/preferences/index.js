import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, DatePickerIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';

//edit preferences - what you are looking for from other people in the stax you are a member of
export default class Preferences extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>preferences</Text>
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
