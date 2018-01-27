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
import AboutStax from './about_stax';
import Login from './login';

const Heystax = StackNavigator({
  Preferences: {screen: Preferences},
  MyStax: {screen: MyStax},
  Settings: {screen: Settings},
  SplashPage: {screen: SplashPage},
  Swipe: {screen: Swipe},
  Explore: {screen: Explore},
  AboutStax: {screen: AboutStax},
  Login: {screen: Login},
  MyProfile: {screen: MyProfile}
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
