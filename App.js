import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MyStax from './views/my_stax';
import Settings from './views/settings/main_page';
import SplashPage from './views/splash_page';
import Preferences from './views/settings/preferences';
import MyProfile from './views/settings/my_profile';
import AboutHeystax from './views/settings/about_heystax';
import Login from './views/login';
import BrynnMessages from './views/messages/brynn';
import AnneMessages from './views/messages/anne';
import SimpleTabs from './simple_tabs_example';
import Inbox from './views/inbox';
import EditProfile from './views/edit_profile';
import Swipe from './views/swiping_test';
import Explore from './views/explore/start_grid';
import Mentorship from './views/explore_select/mentorship';
import Womentors from './views/explore/stax/womentors/about';
import JoinWomentors from './views/explore/stax/womentors/join';

const Heystax = StackNavigator({
  JoinWomentors: {screen: JoinWomentors},
  Womentors: {screen: Womentors},
  Explore: {screen: Explore},
  Mentorship: {screen: Mentorship},
  Swipe: {screen: Swipe},
  Settings: {screen: Settings},
  Inbox: {screen: Inbox},
  BrynnMessages: {screen: BrynnMessages},
  AnneMessages: {screen: AnneMessages},
  Login: {screen: Login},
  SplashPage: {screen: SplashPage},
  Preferences: {screen: Preferences},
  MyProfile: {screen: MyProfile},
  AboutHeystax: {screen: AboutHeystax},
  MyStax: {screen: MyStax},
  EditProfile: {screen: EditProfile},
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
