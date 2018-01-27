import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, DatePickerIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FooterMenu from '../../components/footer_menu';
import { Card, List, ListItem, Header } from 'react-native-elements';

//user is directed to messages first, to encourage meeting up quicker!
const users = [
 {
    name: 'brynn',
    avatar: require('../../images/brynn.jpg'),
    subtitle: 'Hey Jules, your dog is...',
    messageUser: 'BrynnMessages'

 },
{
    name: 'anne',
    avatar: require('../../images/anne.jpg'),
    subtitle: 'You sound awesome!...',
    messageUser: 'AnneMessages'
    }
]

export default class Inbox extends React.Component {

  render() {
    const { navigate } = this.props.navigation;

    return (
        <View>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{ text: 'Messages', style: { color: '#000000'} }}
          outerContainerStyles={{ backgroundColor: '#FFFFFF' }}
          innerContainerStyles={{ justifyContent: 'space-around',}}
        />
        <Button
            title="settings"
            onPress={() =>
              navigate('Settings')
            }
        />

        <List containerStyle={{marginBottom: 250}}>
          {
            users.map((u, i) => (
              <ListItem
                roundAvatar
                avatar={u.avatar}
                key={i}
                title={u.name}
                subtitle={u.subtitle}
                onPress={() => navigate(u.messageUser)}
              />
            ))
          }
        </List>

        <FooterMenu/>
      </View>
    );
  }
}
