import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, DatePickerIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FooterMenu from '../../../components/footer_menu';
import PrefIcon from 'react-native-vector-icons/Octicons';
import StaxIcon from 'react-native-vector-icons/Feather';
import { Icon, List, ListItem, Header, Avatar } from 'react-native-elements';


//add bordered button someday
//get nativebase worked in
const navigation = [
 {
    name: 'Preferences',
    icon: <PrefIcon name="settings"/>,
    page: 'Preferences'
 },
{
    name: 'About Heystax',
    icon: <StaxIcon name="info"/>,
    page: 'AboutHeystax'
    }
]
//main settings navigation
export default class Settings extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        centerComponent={{ text: 'Settings', style: { color: '#000000'} }}
        outerContainerStyles={{ backgroundColor: '#FFFFFF' }}
        innerContainerStyles={{ justifyContent: 'space-around',}}
      />
      <Avatar
        xlarge
        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
        onPress={() => navigate('EditProfile')}
        activeOpacity={0.7}
      />

      <Icon
        raised
        name='edit'
        type='Entypo'
        color='#f50'
        onPress={() => console.log('hello')}
      />
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        centerComponent={{ text: 'Jules', style: { color: '#000000'} }}
        outerContainerStyles={{ backgroundColor: '#FFFFFF' }}
        innerContainerStyles={{ justifyContent: 'space-around',}}
      />
      <List containerStyle={{marginBottom: 200}}>
      {
        navigation.map((item, i) => (
          <ListItem
            key={i}
            rightTitle={item.name}
            title={item.name}
            leftIcon={item.icon}
            onPress={() => navigate(item.page)}
          />
        ))
      }
    </List>
        <FooterMenu/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
