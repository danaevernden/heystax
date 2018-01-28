import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MyStax from './views/my_stax';
import Settings from './views/settings/main_page';
import SplashPage from './views/splash_page';
import Preferences from './views/settings/preferences';
import MyProfile from './views/settings/my_profile';
import AboutHeystax from './views/settings/about_heystax';
import BrynnMessages from './views/messages/brynn';
import AnneMessages from './views/messages/anne';
import SimpleTabs from './simple_tabs_example';
import Inbox from './views/inbox';
import EditProfile from './views/edit_profile';
import Swipe from './views/swiping_test';
import Explore from './views/explore/start_grid';
import Mentorship from './views/explore_select/mentorship';
import Womentors from './views/explore/stax/womentors/about';
import JoinWomentors from './views/explore/stax/womentors/join';
import DistanceWidget from './views/widgets/distance_widget';
import AgeRangeWidget from './views/widgets/age_range_widget';
import QuestionsWidget from './views/widgets/questions_widget';
import YearsOfExperienceWidget from './views/widgets/years_of_experience_widget';
import Test from './views/!test';

const Heystax = StackNavigator({
  Womentors: {screen: Womentors},
  SplashPage: {screen: SplashPage},
  Explore: {screen: Explore},
  Settings: {screen: Settings},
  Swipe: {screen: Swipe},

  //direct links
  Inbox: {screen: Inbox},

  //views from buttons in app
  EditProfile: {screen: EditProfile},
  Preferences: {screen: Preferences},
  DistanceWidget: {screen: DistanceWidget},
  QuestionsWidget: {screen: QuestionsWidget},
  AgeRangeWidget: {screen: AgeRangeWidget},
  YearsOfExperienceWidget: {screen: YearsOfExperienceWidget},
  Mentorship: {screen: Mentorship},
  MyStax: {screen: MyStax},
  JoinWomentors: {screen: JoinWomentors},
  BrynnMessages: {screen: BrynnMessages},
  AnneMessages: {screen: AnneMessages},
  AboutHeystax: {screen: AboutHeystax},
  //testing
  Test: {screen: Test},

});

export default class App extends React.Component {
  render() {
    return (
      <Heystax/>
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
