import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, DatePickerIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';

//work on this last!
//user will log in using fb or google
export default class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
            title="login"
            onPress={() =>
              navigate('SplashPage')
            }
          />
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
