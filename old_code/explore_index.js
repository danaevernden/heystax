import React from 'react';
import { StyleSheet, TextInput, View, DatePickerIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PrefIcon from 'react-native-vector-icons/Octicons';
import StaxIcon from 'react-native-vector-icons/Feather';
import { Icon, List, ListItem, Header, Avatar, Button, Text, Content, Container } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';

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
export default class Explore extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        centerComponent={{ text: 'Explore', style: { color: '#000000'} }}
        outerContainerStyles={{ backgroundColor: '#FFFFFF' }}
        innerContainerStyles={{ justifyContent: 'space-around',}}
      />
      <Grid>
          <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
          <Row>
      <Avatar
        xlarge
        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
        onPress={() => navigate('EditProfile')}
        activeOpacity={0.7}
      />
      </Row>
      <Row><Text>hey</Text></Row>
      </Col>
        <Col style={{ backgroundColor: '#00CE9F', height: 200 }}>
            <Row><Text>hey</Text></Row>
            <Row style={{ backgroundColor: '#000000', height: 200 }}></Row>
        </Col>

      </Grid>
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
