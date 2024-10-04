import 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import StackNavigator from './src/Navigator/StackNavigator';
import {Provider} from 'react-redux';
import store from './redux/store';
import Orientation from 'react-native-orientation-locker';

LogBox.ignoreAllLogs();



const App = () => {
  useEffect(() => {
    // Orientation.lockToPortrait()
  },[])

  
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
};

export default App;

