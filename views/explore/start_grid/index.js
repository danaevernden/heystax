import React, { Component } from 'react';
import { Button } from 'native-base';
import FooterMenu from '../../../components/footer_menu';
import categories2 from '../../!test_arrays/Categories.js'
//cant get navigate to work
import { StyleSheet, View, Text } from 'react-native';
import GridView from 'react-native-super-grid';
import { StackNavigator } from 'react-navigation';

export default class Example extends Component {
  render() {
    // Taken from https://flatuicolors.com/
    const { navigate } = this.props.navigation;

    const categories = [
    {  id: 1, name: 'Nonprofit Involvement', code: '#1abc9c', page: 'Nonprofit'},
    {  id: 2, name: 'Social Justice Buddies', code: '#3498db', page: 'SJBuddies'},
    {  id: 3, name: 'Accountabilibuddies', code: '#34495e', page: 'Accountability'},
    {  id: 4, name: 'Learn from Others', code: '#27ae60', page: 'Mentorship'},
    {  id: 5, name: 'Coffee Shop Conversations', code: '#8e44ad', page: 'CoffeeShop'},
    ];


    return (
      <GridView
        itemDimension={130}
        items={categories}
        style={styles.gridView}
        renderItem={item => (
          <View>
          <Button
            style={[styles.itemContainer,
            { backgroundColor: item.code }]}
            onPress={() => navigate('Mentorship')}
          >
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
            </Button>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
