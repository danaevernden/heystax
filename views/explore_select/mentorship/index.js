import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import GridLayout from 'react-native-layout-grid';

export default class App extends Component<{}> {

  renderGridItem = (item) => (
    <View style={{height: 150,backgroundColor:item.color, padding: 10}}>
      <View style={styles.flex} />
      <Text style={styles.name}>
        {item.name}
      </Text>
    </View>
  );

  render() {
    const items = [];
    for (let x = 1; x <= 30; x++) {
      items.push({
        name: `Grid ${x}`,
        color: '#CCCCCC',
        page: 'Mentorship'
      });
    }

    const items_test = [
    {  name: 'Nonprofit Involvement', color: 'grey', page: 'Nonprofit'},
    {  name: 'Social Justice Buddies', color: 'purple', page: 'SJBuddies'},
    {  name: 'Accountabilibuddies', color: 'blue', page: 'Accountability'},
    {  name: 'Mentorship', color: 'green', page: 'Mentorship'},
    {  name: 'Coffee Shop Conversations', color: 'orange', page: 'CoffeeShop'},
    ]
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Explore Stax
        </Text>
        <View style={styles.flex}>
          <GridLayout
            items={items}
            itemsPerRow={2}
            renderItem={this.renderGridItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
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
