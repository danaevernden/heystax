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
              </Card>
            }
          />
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
