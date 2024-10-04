import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import Media from '../Screens/Media';
import CallChat from '../Screens/CallChat';
import Create from '../Screens/Create';
import Community from '../Screens/Community';
import Account from '../Screens/Account';

const iconPath = {
  h: require('../images/zappzo/tab_navigator/media.png'),
  ha: require('../images/zappzo/tab_navigator/media_active.png'),
  s: require('../images/zappzo/tab_navigator/chat.png'),
  sa: require('../images/zappzo/tab_navigator/chat_active.png'),
  c: require('../images/zappzo/tab_navigator/create.png'),
  ca: require('../images/zappzo/tab_navigator/create.png'),
  f: require('../images/more.png'),
  fa: require('../images/more.png'),
  p: require('../images/zappzo/tab_navigator/community.png'),
  pa: require('../images/zappzo/tab_navigator/community_active.png'),
  a: require('../images/zappzo/tab_navigator/account.png'),
  Aa: require('../images/zappzo/tab_navigator/account_active.png'),
};

const Tab = createBottomTabNavigator();
const TabIcon = source => <Image source={source} style={styles.tabIcon} />;
const TabPlus = source => <Image source={source} style={styles.tabPlus} />;
const ChatBase = () => <View style={{flex: 1, backgroundColor: 'red'}} />;
const TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Media"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        labelStyle: {
          paddingBottom: 2,
          fontSize: 12,
          fontFamily: 'Poppins-Medium',
          fontWeight: '500',
          color: '#363636',
          marginTop: 20,
        },
        activeTintColor: '#6CBDFF',

        
        // activeBackgroundColor: '#fff',
        // inactiveBackgroundColor: '#fff',
      }}>
      <Tab.Screen
        name="Media"
        component={Media}
        options={{
          tabBarLabel: 'Media',
          tabBarIcon: ({focused}) =>
            TabIcon(focused ? iconPath.ha : iconPath.h),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Calls & Chats"
        component={CallChat}
        options={{
          tabBarLabel: 'Calls & Chats',
          tabBarIcon: ({focused}) =>
            TabIcon(focused ? iconPath.sa : iconPath.s),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          tabBarLabel: 'Create',
          tabBarIcon: ({focused}) =>
            TabIcon(focused ? iconPath.ca : iconPath.c),
          headerShown: false,
        }}
        // listeners={() => ({
        //   tabPress: e => {
        //     e.preventDefault();
        //     navigation.navigate('HomeServices2');
        //   },
        // })}
      />

      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarLabel: 'Community',
          tabBarIcon: ({focused}) =>
            TabIcon(focused ? iconPath.pa : iconPath.p),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({focused}) =>
            TabIcon(focused ? iconPath.Aa : iconPath.a),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;

const styles = StyleSheet.create({
  tabIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginTop: 20,
  },
  tabPlus: {
    height: 60,
    width: 60,
    marginTop: -10,
    resizeMode: 'contain',
  },
});
