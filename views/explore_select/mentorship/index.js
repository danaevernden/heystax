import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';
import GridLayout from 'react-native-layout-grid';
import { Button } from 'native-base';
import FooterMenu from '../../../components/footer_menu';

//cant get navigate to work

const items = [
{  name: 'WOMENTORS', color: 'grey', page: 'Womentors'},
{  name: 'Friends of the Homeless', color: 'purple', page: 'FriendsOfHomeless'},
{  name: 'Music Lessons', color: 'brown', page: 'MusicLessons'},
];

export default class App extends Component {

  renderGridItem = (item) => (
    <View style={{height: 150,backgroundColor:'#CCCCCC', padding: 10}}>
      <Button
      onPress={() => navigate('Settings')}>
        <View style={styles.flex} />
        <Text style={styles.name}>
          {items.name}
        </Text>
      </Button>
    </View>
  );

  render() {

    const items2 = [];
    for (let x = 1; x <= 30; x++) {
      items2.push({
        name: `Grid ${x}`,
        color: '#CCCCCC',
        page: 'Mentorship'
      });
    }

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Learn from Others
        </Text>
        <View style={styles.flex}>
          <GridLayout
            items={items}
            itemsPerRow={2}
            renderItem={this.renderGridItem}
          />
        </View>
      <FooterMenu/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  flex: {
    flex: 1,
  },
  item: {
    height: 150,
    backgroundColor: '#CCCCCC',
    padding: 10,
  },
  name: {
    fontSize: 12,
    textAlign: 'center',
    color: '#000000'
  },
});
