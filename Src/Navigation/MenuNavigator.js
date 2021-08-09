import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';
import Home from '../Home';
import Detail from '../Detail';
import Menu from '../Menu';
import HomeNavigator from './HomeNavigator';

const MenuNavigator = createBottomTabNavigator({
  Home: HomeNavigator,
  Details:Detail,
  Menu:Menu,
});

export default createAppContainer(MenuNavigator);

