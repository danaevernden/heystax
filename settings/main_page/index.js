import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, DatePickerIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';

//main settings navigation
export default class Settings extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>settings</Text>
        <Button
            title="about heystax"
            onPress={() =>
              navigate('AboutHeystax')
            }
          />
        <Button
            title="my profile"
            onPress={() =>
              navigate('MyProfile')
            }
        />
        <Button
            title="preferences"
            onPress={() =>
              navigate('Preferences')
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
