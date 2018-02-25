import React from 'react';
import { StyleSheet, TextInput, View, Image, DatePickerIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FooterMenu from '../../components/footer_menu';
import { Container, Header, Content, Footer, FooterTab, Button, Title, Icon, Text, List, Right, Left, Body, Thumbnail, ListItem } from 'native-base';
//user is directed to messages first, to encourage meeting up quicker!
const items = [
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
        <Container>
        <Header>
          <Title>Messages</Title>
        </Header>
        <Button
            title="settings"
            onPress={() =>
              navigate('Settings')
            }
        />

      <List dataArray={items}

           renderRow={(items) =>
             <Container>
             <Button style={{backgroundColor:'white', height:80}}
             onPress={() =>
               navigate(items.messageUser)
             }>
               <Left>
                  <Thumbnail source={items.avatar} />
                </Left>
                <Body>
                  <Text>{items.name}</Text>
                </Body>
             <Text note>{items.subtitle}</Text>
             <Right>
                <Icon name="arrow-forward" />
            </Right>
             </Button>
            </Container>
           }>
         </List>

        <FooterMenu
        navigation = {this.props.navigation}
        MyMatches = 'Swipe'
        />
      </Container>
    );
  }
}
