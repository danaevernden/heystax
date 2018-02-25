import type { NavigationScreenProp, EventListener } from 'react-navigation';

import React from 'react';
import { Button, Platform, ScrollView, StatusBar, View } from 'react-native';
import { SafeAreaView, TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MyNavScreen = ({ navigation, banner }) => (
  <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
    <Button
      onPress={() => navigation.navigate('Home')}
      title="Go to home tab"
    />
    <Button
      onPress={() => navigation.navigate('Settings')}
      title="Go to settings tab"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
    <StatusBar barStyle="default" />
  </SafeAreaView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Tab" navigation={navigation} />
);

MyHomeScreen.navigationOptions = {
  tabBarTestIDProps: {
    testID: 'TEST_ID_HOME',
    accessibilityLabel: 'TEST_ID_HOME_ACLBL',
  },
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-home' : 'ios-home-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const MyPeopleScreen = ({ navigation }) => (
  <MyNavScreen banner="People Tab" navigation={navigation} />
);

MyPeopleScreen.navigationOptions = {
  tabBarLabel: 'People',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-people' : 'ios-people-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const MyChatScreen = ({ navigation }) => (
  <MyNavScreen banner="Chat Tab" navigation={navigation} />
);

MyChatScreen.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const MySettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Settings Tab" navigation={navigation} />
);

MySettingsScreen.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-settings' : 'ios-settings-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const SimpleTabs = TabNavigator(
  {
    Home: {
      screen: MyHomeScreen,
      path: '',
    },
    People: {
      screen: MyPeopleScreen,
      path: 'cart',
    },
    Chat: {
      screen: MyChatScreen,
      path: 'chat',
    },
    Settings: {
      screen: MySettingsScreen,
      path: 'settings',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    },
  }
);

type SimpleTabsContainerProps = {
  navigation: NavigationScreenProp<*>,
};

class SimpleTabsContainer extends React.Component<SimpleTabsContainerProps> {
  static router = SimpleTabs.router;
  _s0: EventListener;
  _s1: EventListener;
  _s2: EventListener;
  _s3: EventListener;

  // componentDidMount() {
  //   this._s0 = this.props.navigation.addListener('willFocus', this._onWF);
  //   this._s1 = this.props.navigation.addListener('didFocus', this._onDF);
  //   this._s2 = this.props.navigation.addListener('willBlur', this._onWB);
  //   this._s3 = this.props.navigation.addListener('didBlur', this._onDB);
  // }
  componentWillUnmount() {
    this._s0.remove();
    this._s1.remove();
    this._s2.remove();
    this._s3.remove();
  }
  _onWF = a => {
    console.log('_onWillFocus tabsExample ', a);
  };
  _onDF = a => {
    console.log('_onDidFocus tabsExample ', a);
  };
  _onWB = a => {
    console.log('_onWillBlur tabsExample ', a);
  };
  _onDB = a => {
    console.log('_onDidBlur tabsExample ', a);
  };
  render() {
    return <SimpleTabs navigation={this.props.navigation} />;
  }
}

export default SimpleTabsContainer;
