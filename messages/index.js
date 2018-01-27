import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, DatePickerIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';

//user is directed to messages first, to encourage meeting up quicker!

export default class Messages extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>messages</Text>
        <Button
            title="swipe"
            onPress={() =>
              navigate('Swipe')
            }
          />
        <Button
            title="settings"
            onPress={() =>
            navigate('Settings')
          }
        />
        <Button
            title="explore"
            onPress={() =>
            navigate('Explore')
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
