import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, DatePickerIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';

//flip between stax you are currently a member of - bumble view
export default class MyStax extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
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
