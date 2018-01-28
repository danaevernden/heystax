import React, { Component } from 'react'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons';
import SettingsIcon from 'react-native-vector-icons/SimpleLineIcons';
import UsersIcon from 'react-native-vector-icons/Entypo';
import StaxIcon from 'react-native-vector-icons/Feather';
import MessagesIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Explore from '../../views/explore';

//="#2DFFAB" accent color
//also try icon footer with text from nativebase
export default class FooterMenu extends React.Component {

  render() {

    return (
      <BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
        onTabChange = {this.onTabChange}
      >
        <Tab
          activeLabelColor="#000000"
          barBackgroundColor="#FFFFFF"
          label="Discover"

          icon={<StaxIcon size={24} color="#000000" name="layers" />}
        />
        <Tab
          activeLabelColor="#000000"
          barBackgroundColor="#FFFFFF"
          label="Likes You"
          icon={<UsersIcon size={24} color="#000000" name="users" />}
          onTabChange={() =>  navigate('MyMatches')}
           // onPress={() => navigation.navigate('Swipe')}
        />
        <Tab
          activeLabelColor="#000000"
          barBackgroundColor="#FFFFFF"
          label="Say Hey"
          icon={<MessagesIcon size={24} color="#000000" name="message-text-outline" />}
          onTabChange={() =>  navigate('Messages')}
           // onPress={() => navigation.navigate('Inbox')}
        />
        <Tab
          activeLabelColor="#000000"
          barBackgroundColor="#FFFFFF"
          label="Settings"
          icon={<SettingsIcon size={24} color="#000000" name="settings" />}
          onTabChange={() =>  navigate('Settings')}
           // onPress={() => navigation.navigate('Swipe')}
        />
      </BottomNavigation>
    )
  }
}
