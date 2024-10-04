import React from 'react';
import {StatusBar} from 'react-native';

export const StatusBarLight = props => (
  <StatusBar
    barStyle={'light-content'}
    backgroundColor="transparent"
    translucent={true}
    {...props}
  />
);

export const StatusBarDark = props => (
  <StatusBar
    barStyle={props.barStyle ? props.barStyle : 'light-content'}
    backgroundColor="transparent"
    // backgroundColor={props.bg ? props.bg : '#FFFFFF'}
    // style={{height: StatusBar.currentHeight}}
    translucent={true}
    {...props}
  />
);
