import React, {useRef} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {TransitionPresets} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import Onboard from '../Screens/Onboard';
import Home from '../Screens/Home';
import CompleteProfile from '../Screens/CompleteProfile';
import Settings from '../Screens/Settings';
import TabNavigator from './TabNavigator';
import Events from '../Screens/Events';
import SignUp from '../Screens/SignUp';
import Gallery from '../Screens/Gallery';
import EventDetails from '../Screens/EventDetails';


const Stack = createStackNavigator();
const StackNavigator = () => {
  const forFade = ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  const screenOptionStyle = {
    // headerShown: false,
    headerTitleStyle: {alignSelf: 'center'},
    ...TransitionPresets.SlideFromRightIOS,
  };
  const navigationRef = useRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={screenOptionStyle}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CompleteProfile"
          component={CompleteProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Events"
          component={Events}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Gallery"
          component={Gallery}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EventDetails"
          component={EventDetails}
          options={{headerShown: false}}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;
