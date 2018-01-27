import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, DatePickerIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';

//insert a blurb about how awesome heystax is
//no footer necessary
export default class AboutHeystax extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>about stax</Text>
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
