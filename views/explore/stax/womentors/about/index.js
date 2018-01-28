import React, { Component } from 'react';
import { Image } from 'react-native';
import WomentorsIcon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Title, Button, Icon, Left, Right, Body } from 'native-base';


//native base card showcase
//add footernav?
export default class CardShowcaseExample extends Component {
  render() {
        const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
        <WomentorsIcon name="female" style={{ color: '#ED4A6A', fontSize: 40}} />
        <WomentorsIcon name="female" style={{ color: '#ED4A6A', fontSize: 40}} />
        <Title>WOMENTORS</Title>
        </Header>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>

                <Body>
                  {//}<Text note>April 15, 2016</Text>
                  }
                  <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
              {
              //  <Button transparent textStyle={{color: '#87838B'}}>
              //    <Icon name="ios-people" style={{fontSize: 30}} />
              //    <Text>1,926 members</Text>
              //  </Button>
              }
              </Left>
              <Right>
                <Button block style={{backgroundColor: '#2DFFAB'}}
                onPress={() => navigate('JoinWomentors')}>
                  <Text>Join</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
