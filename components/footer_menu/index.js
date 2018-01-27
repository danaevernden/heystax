import React, { Component } from 'react'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Explore from '../../views/explore';
import Messages from '../../views/messages';



class FooterMenu extends React.Component {


  render() {
	    const { navigate } = this.props.navigation;

    return (
      <BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
        onTabChange = {this.onTabChange}
      >
        <Tab
          activeLabelColor="#2DFFAB"
          barBackgroundColor="#000000"
          label="Say Hey"

          icon={<Icon size={24} color="#2DFFAB" name="tv" />}
        />
        <Tab
          barBackgroundColor="#00796B"
          label="Explore"
          icon={<Icon size={24} color="white" name="music-note" />}
          onPress={() => this.props.navigation.navigate('Swipe')}
          // onPress={() => navigation.navigate('Swipe')}
        />
        <Tab
          barBackgroundColor="#5D4037"
          label="Messages"
          icon={<Icon size={24} color="white" name="book" />}
        />
        <Tab
          barBackgroundColor="#3E2723"
          label="Preferences"
          icon={<Icon size={24} color="white"  />}
        />
      </BottomNavigation>
    )
  }
}

export default FooterMenu;
