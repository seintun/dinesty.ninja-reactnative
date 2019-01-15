
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common'
import BizList from './components/BizList'
import BizInfoPage from './components/BizInfoPage'

class Main extends Component {
  render() {
    return(
      <View>
        <Header headerText='🐿 Dinesty Ninja 🐳' />
        <Text>Welcome to Dinesty Ninja, where ninjas infiltrate line!</Text>
        <BizList />
        <BizInfoPage />
      </View>
    )
  };
}
export default Main;