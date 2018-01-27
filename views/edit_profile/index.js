import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, DatePickerIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FooterMenu from '../../components/footer_menu';
import PrefIcon from 'react-native-vector-icons/Octicons';
import StaxIcon from 'react-native-vector-icons/Feather';
import { Card, List, ListItem, Header,Avatar } from 'react-native-elements';

const navigation = [
 {
    name: 'Preferences',
    icon: <PrefIcon name="settings"/>,
    page: 'Preferences'
 },
{
    name: 'About Heystax',
    icon: <StaxIcon name="info"/>,
    page: 'AboutHeystax'
    }
]
//main settings navigation
export default class EditProfile extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <Text>Edit Profile</Text>
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
