import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MyStax from './views/my_stax';
import Settings from './views/settings/main_page';
import SplashPage from './views/splash_page';
import Swipe from './views/swipe';
import Preferences from './views/settings/preferences';
import MyProfile from './views/settings/my_profile';
import Explore from './views/explore';
import AboutHeystax from './views/settings/about_heystax';
import Login from './views/login';
import Messages from './views/messages';
import SimpleTabs from './simple_tabs_example';

const Heystax = StackNavigator({
	
  Messages: {screen: Messages},
  Login: {screen: Login},
  SplashPage: {screen: SplashPage},
  Swipe: {screen: Swipe},
  Settings: {screen: Settings},
  Preferences: {screen: Preferences},
  MyProfile: {screen: MyProfile},
  AboutHeystax: {screen: AboutHeystax},
  Explore: {screen: Explore},
  MyStax: {screen: MyStax},
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