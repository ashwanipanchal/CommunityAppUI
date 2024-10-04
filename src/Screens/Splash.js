import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {Api, LocalStorage} from '../../backend/Api';
import {_SetAuthToken} from '../../backend/ApiSauce';
const {height, width} = Dimensions.get('window');

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      checkAuth();
    }, 3000);
    // requestUserPermission();
    console.log("Splash")
  }, [navigation]);

  const checkAuth = async () => {
    // const token = (await LocalStorage?.getToken()) || '';
    // if (token.length !== 0) {
    //   console.log({token});
    //   _SetAuthToken(token);

      // navigation.reset({
      //   index: 0,
      //   routes: [{name: 'TabNavigator'}],
      // });
    // } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    // }
  };

  // async function requestUserPermission() {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  //   if (enabled) {
  //     getFcmToken();
  //   }
  // }

  // const getFcmToken = async () => {
  //   try {
  //     let fcmToken = await messaging().getToken();
  //     if (fcmToken) {
  //       // dispatch(actions.SetToken(fcmToken));
  //       // LocalStorage.setFcmToken(fcmToken);
  //       Global.fcmtoken = fcmToken;
  //       console.log('-------------fcmToken : ', fcmToken);
  //     }
  //   } catch (error) {
  //     console.log(error, '-------------error');
  //   }
  // };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar barStyle="dark-content" backgroundColor={'#F3F3F3'} />
      <Image
        // style={imageStyle.image}
        resizeMode='cover'
        style={{height:"100%", width:"100%"}}
        source={require('../images/splashZ.png')}
      />
    </View>
  );
};

export default Splash;
