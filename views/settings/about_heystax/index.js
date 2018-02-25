import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Title, Body } from 'native-base';

export default class AboutHeystax extends Component {
  render() {
    return (
      <Container>
        <Header><Text>About Heystax</Text></Header>
        <Content>
          <Card>

            <CardItem cardBody>
              <Image source={require('../../../images/heystax_logo.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Body>

              <CardItem header>
                <Text>Inspiration</Text>
              </CardItem>

                <Text>
                  We wanted to create a solution that would help people come together around interests and causes in a more meaningful way. We felt that the current offerings fell short in this because they lacked accountability, intentionality and/or depth. By focusing on one-on-one relationships centered on shared interests we are hoping that Heystax will be the quality over quantity solution. From an entrepreneurial standpoint, we saw a strong market opportunity for a platform that gave people the ability to create these groups given the proliferation of "tinder for..." mobile applications. By creating the central hub and standardized usability, we believe Heystax will be the chosen platform for these use cases. Heystax will have an advantage over separate disparate apps in that having them together will cause a synergistic effect on usage across all of the groups and reduce attrition as a user will only need to leave a group when they no longer find themselves in that category rather than deleting the app altogether.
                  </Text>
                  <CardItem header>
                    <Text>What it does</Text>
                  </CardItem>
                  <Text>
                  Heystax helps people build deeper connections quicker through intentionality and accountability. After creating a basic profile, you join "stax" that you are interested in. Within each stack, you use a swiping functionality to find matches within that group. This is the intentionality component. By having dedicated stax for each interest, the intentions of each user are made more clear. Once a connection is made, depth is promoted through randomized meaningful conversation starters that are automatically populated within the direct message window.

                </Text>
              </Body>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}
