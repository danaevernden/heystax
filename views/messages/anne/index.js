import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, DatePickerIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FooterMenu from '../../../components/footer_menu';
import { Card, List, ListItem, Header } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';

export default class AnneMessages extends React.Component {

  state = {
    messages: [],
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'You sound awesome! I would love to meet over coffe this week. When are you free?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }

}
