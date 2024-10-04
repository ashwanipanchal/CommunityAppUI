import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const LoaderBottom = props =>
  // props.status && (
    <View
      style={{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: '100%',
        height: '90%',
        zIndex: 1,
        top: 180,
      }}>
      <View style={{height:50}}>
        {/* <ActivityIndicator
          style={{marginTop: 30}}
          animating={true}
          size="large"
          color="#DC2F2E"
        /> */}
        
      </View>
    </View>
  // );

export default LoaderBottom;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '100%',
    height: '90%',
    zIndex: 10,
    elevation: 10,
  },
});
