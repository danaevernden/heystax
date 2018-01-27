import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MyStax from './my_stax';
import Settings from './settings/main_page';
import SplashPage from './splash_page';
import Swipe from './swipe';
import Preferences from './settings/preferences';
import MyProfile from './settings/my_profile';
import Explore from './explore';
import AboutHeystax from './settings/about_heystax';
import Login from './login';
import Messages from './messages';

const Heystax = StackNavigator({
  Login: {screen: Login},
  SplashPage: {screen: SplashPage},
  Swipe: {screen: Swipe},
  Settings: {screen: Settings},
  Preferences: {screen: Preferences},
  MyProfile: {screen: MyProfile},
  AboutHeystax: {screen: AboutHeystax},
  Explore: {screen: Explore},
  MyStax: {screen: MyStax},
  Messages: {screen: Messages}
});

export default class App extends React.Component {
  render() {
    return (
      <Heystax/>
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
