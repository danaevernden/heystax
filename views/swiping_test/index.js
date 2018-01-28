import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Header, Title, Button } from 'native-base';
import LocIcon from 'react-native-vector-icons/SimpleLineIcons';
import FooterMenu from '../../components/footer_menu';
const cards = [
  {
    text: 'Brynn',
    name: 'Williamsburg',
    image: require('./images/brynn.jpg'),
  },
  {
    text: 'Anne',
    name: 'Upper West Side',
    image: require('./images/anne.jpg'),
  },
];

// from https://docs.nativebase.io/Components.html#deckswiper-def-headref
// add infinite scroll?
//https://blog.nativebase.io/building-infinite-scroll-in-react-native-e717602553f8
//add onswiperight and onswipeleft
//or no swiping and just buttons and scrolling
export default class Swipe extends Component {
  render() {
      const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Container>
        <Button
        onPress={() => navigate('Explore')}>
        <Header>
          <Title>
            WOMENTORS
          </Title>
        </Header>
        </Button>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                   {//  <Thumbnail source={item.image} /> }
                   }
                    <Body>
                      <Text>{item.text}</Text>
                    { // <Text note>Test</Text>
                    }
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <LocIcon name="location-pin" style={{ color: '#ED4A6A', fontSize: 20 }} />
                  <Text>{item.name}</Text>
                </CardItem>
                <CardItem>

                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
                </Text>
                </CardItem>
              </Card>
            }
          />
        </View>
        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 0, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>Swipe Left</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Icon name="arrow-forward" />
            <Text>Swipe Right</Text>
          </Button>
        </View>
      </Container>
      <Button
          title="my stax"
          onPress={() =>
            navigate('MyStax')
          }
        />
      <FooterMenu/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
