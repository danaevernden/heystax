import React, { Component } from 'react'
import { NavigationComponent, BottomNavigation,  Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Explore from '../../views/explore';




export default class FooterMenu extends React.Component {


  render() {
    const MyApp = TabNavigator({
      Explore: { screen: Explore },
    }, {
      tabBarComponent: NavigationComponent,
      tabBarPosition: 'bottom',
      tabBarOptions: {
        bottomNavigationOptions: {
          labelColor: 'white',
          rippleColor: 'white',
          tabs: {
            // MoviesAndTV: {
            //   barBackgroundColor: '#37474F'
            // },
            // Music: {
            //   barBackgroundColor: '#00796B'
            // },
            Explore: {
              barBackgroundColor: '#EEEEEE',
              labelColor: '#434343', // like in the standalone version, this will override the already specified `labelColor` for this tab
              activeLabelColor: '#212121',
              activeIcon: <Icon size={24} color="#212121" name="ac-unit" />
            }
          }
        }
      }
    })
    return (
      <MyApp/>
    )
  }
}
