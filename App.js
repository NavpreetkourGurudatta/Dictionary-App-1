import *  as React from 'react';
import {Text,StyleSheet,View} from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

export default class App extends React.Component{


render(){
  return(
    <View>
    <AppContainer/>
    </View>
  )
}
}
var AppNavigator =  createSwitchNavigator({
  HomeScreen:HomeScreen
})
var AppContainer=createAppContainer(AppNavigator)
