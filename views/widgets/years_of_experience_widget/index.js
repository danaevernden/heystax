import React, { Component } from 'react';
import { Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Title, List, Text, ListItem, Right, Button } from 'native-base';
import WomentorsIcon from 'react-native-vector-icons/FontAwesome';
import MultiSlider from '@ptomasroos/react-native-multi-slider';


//fix warning
export default class YearsOfExperienceWidget extends Component {
  state = {
   sliderOneChanging: false,
   sliderTwoChanging: false,
   sliderTwoValue: [5],
   sliderOneValue: [5],
   multiSliderValue: [30, 50],
 };

 sliderOneValuesChangeStart = () => {
   this.setState({
     sliderOneChanging: true,
   });
 }

 sliderTwoValuesChangeStart = () => {
   this.setState({
     sliderTwoChanging: true,
   });
 }

 sliderOneValuesChange = (values) => {
   let newValues = [0];
   newValues[0] = values[0];
   this.setState({
     sliderOneValue: newValues,
   });
 }

 sliderTwoValuesChange = (values) => {
   let newValues = [0];
   newValues[0] = values[0];
   this.setState({
     sliderTwoValue: newValues,
   });
 }

 sliderOneValuesChangeFinish = () => {
   this.setState({
     sliderOneChanging: false,
   });
 }

 sliderTwoValuesChangeFinish = () => {
   this.setState({
     sliderTwoChanging: false,
   });
 }

 multiSliderValuesChange = (values) => {
   this.setState({
     multiSliderValue: values,
   });
}
  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Header>
          <Title> WOMENTORS Preferences</Title>
        </Header>
        <Content>
          <View style={styles.sliderOne}>
            <Text style={styles.text}>Years of Experience:</Text>
            <Text style={[styles.text, this.state.sliderTwoChanging]}>
              {this.state.sliderTwoValue}
            </Text>
          </View>
          <MultiSlider
            values={this.state.sliderTwoValue}
            sliderLength={280}
            onValuesChangeStart={this.sliderTwoValuesChangeStart}
            onValuesChange={this.sliderTwoValuesChange}
            onValuesChangeFinish={this.sliderTwoValuesChangeFinish}
          />
        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliders: {
    margin: 20,
    width: 280,
  },
  text: {
    alignSelf: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
