import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, DatePickerIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';

//edit my profile here - very very basic qualities to start, then expand to other stax
//no footer necessary
export default class MyProfile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My Profile</Text>
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
