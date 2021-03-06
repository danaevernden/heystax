import React, { Component } from 'react';
import { Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Title, List, Text, ListItem, Right, Button } from 'native-base';
import WomentorsIcon from 'react-native-vector-icons/FontAwesome';
import MultiSlider from '@ptomasroos/react-native-multi-slider';


//fix warning
export default class JoinWomentors extends Component {
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
          <WomentorsIcon name="female" style={{ color: '#ED4A6A', fontSize: 40}} />
          <WomentorsIcon name="female" style={{ color: '#ED4A6A', fontSize: 40}} />
          <Title>Join WOMENTORS</Title>
        </Header>
        <Content>
        <List>
           <ListItem itemDivider>
             <Text>What have you created that you are most proud of?</Text>
           </ListItem>
        </List>
          <Item success>
            <Input placeholder='my family, a big project'/>
          </Item>
            <View style={styles.sliders}>
                    <View style={styles.sliderOne}>
                      <Text style={styles.text}>Maximum Distance in miles:</Text>
                      <Text style={[styles.text, this.state.sliderOneChanging]}>
                        {this.state.sliderOneValue}
                      </Text>
                    </View>
                    <MultiSlider
                      values={this.state.sliderOneValue}
                      sliderLength={280}
                      onValuesChangeStart={this.sliderOneValuesChangeStart}
                      onValuesChange={this.sliderOneValuesChange}
                      onValuesChangeFinish={this.sliderOneValuesChangeFinish}
                    />

          <View style={styles.sliderOne}>
            <Text style={styles.text}>Acceptable age range:</Text>
            <Text style={styles.text}>{this.state.multiSliderValue[0]} </Text>
            <Text style={styles.text}>{this.state.multiSliderValue[1]}</Text>
          </View>
          <MultiSlider
            values={[this.state.multiSliderValue[0], this.state.multiSliderValue[1]]}
            sliderLength={280}
            onValuesChange={this.multiSliderValuesChange}
            min={18}
            max={80}
            step={2}
            allowOverlap
            snapped
          />
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
          </View>

          <Right>
            <Button block style={{backgroundColor: '#2DFFAB'}}
            onPress={() => navigate('Swipe')}>
              <Text>Submit</Text>
            </Button>
          </Right>
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
