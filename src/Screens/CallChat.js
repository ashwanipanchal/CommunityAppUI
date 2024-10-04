import { Animated, Button, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState , useRef} from 'react'
import HeaderTwoOption from '../Custom/HeaderTwoOption'

const CallChat = () => {
  const [ show, setShow] = useState(false)
  const data = [
    {
      name:"Rishabh Kumar",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      time: "1:41 PM"
    }

  ]

    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    };
  

    
  return (
    <SafeAreaView style={{backgroundColor:"#FFFFFFCC", flex:1}}>
      <StatusBar barStyle="light-content" backgroundColor={'#AC9667'}/>
      <HeaderTwoOption title={"Chats Media"} secondImage={require("../images/zappzo/home_setting.png")} size={true} firstImage={require("../images/zappzo/search.png")} rightOption={() => {
            navigation.navigate('Settings');
          }}/>

    </SafeAreaView>
  )
}

export default CallChat

const styles = StyleSheet.create({})