//use card showcase

import React, { Component } from 'react';
import { Container, Header, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class LayoutExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Grid>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}
