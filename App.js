import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Productdetails from './screens/Productdetails';

const Master = createNativeStackNavigator ( );
export default function App() {
  return (
      <NavigationContainer>
        <Master.Naviagtor screenOptions = {{head : () => null}}>
          <Master.screen
          name = 'Login'
          component = {Login}/>
          <Master.screen
          name = 'Home'
          component = {Home}/>
          <Master.Screen
          name = 'Details'
          component = {Productdetails}/>

        </Master.Naviagtor>
      </NavigationContainer>
  );
}
