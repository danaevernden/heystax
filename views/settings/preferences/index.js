import React, { Component } from 'react';
import { Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Title, Body, List, Text, ListItem, Left, Right, Button, Separator } from 'native-base';


//fix warning
export default class Preferences extends Component {

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Header>
          <Title>Preferences</Title>
        </Header>
        <Content>
        <Separator bordered>
          <Text>WOMENTORS Preferences</Text>
        </Separator>
        <List>
        <Button style={{backgroundColor:'white'}}
        onPress={() =>
          navigate('AgeRangeWidget')
        }>
          <Left>
             <Body>
             <Text>Age Range</Text>
             </Body>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
          </Button>
        </List>
          <List>
          <Button style={{backgroundColor:'white'}}
          onPress={() =>
            navigate('DistanceWidget')
          }>
            <Left>
               <Body>
               <Text>Distance</Text>
               </Body>
            </Left>
            <Right>
              <Icon name="arrow-forward"/>
            </Right>
            </Button>
          </List>
          <List>
          <Button style={{backgroundColor:'white'}}
          onPress={() =>
            navigate('QuestionsWidget')
          }>
            <Left>
               <Body>
                <Text>Questions</Text>
               </Body>
            </Left>
               <Right>
                <Icon name="arrow-forward" />
              </Right>
            </Button>
          </List>
          <List>
          <Button style={{backgroundColor:'white'}}
          onPress={() =>
            navigate('YearsOfExperienceWidget')
          }>
            <Left>
               <Body>
               <Text>Years of Experience</Text>
               </Body>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
            </Button>
          </List>
          <Separator bordered>
            <Text>Accountabilibuddy Preferences</Text>
          </Separator>
        </Content>
      </Container>
    );
  }
}
