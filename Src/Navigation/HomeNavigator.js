import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';
import Home from '../Home';
import ItemView from '../ItemView';


const HomeNavigator = createStackNavigator({
    Home:Home,
    Item:ItemView
});

export default HomeNavigator;
