import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Player from './page/player';
import ShowBar from './page/showBar';
import TopBar from './page/topBar'

class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TopBar/>
        <ScrollView>
          <ShowBar />
        </ScrollView>
        <Player />
      </View>
    );
  }
}

export default Main;
