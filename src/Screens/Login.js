import { SafeAreaView, StatusBar, StyleSheet, Text, View, Pressable, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoaderBottom from '../Custom/LoaderBottom';
import { ButtonStyle } from '../Custom/CustomView';
const window = Dimensions.get('window');

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor:"#F3F3F3", flex:1}}>
      <StatusBar barStyle="dark-content" backgroundColor={'#F3F3F3'} />
      <KeyboardAwareScrollView>
        <Text style={{fontSize:26, lineHeight:39, color:"#000000", textAlign:"center", marginTop:20, fontFamily:"Poppins-SemiBold"}}>LOG IN</Text>

        <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 12,
              letterSpacing: 0.4,
              marginTop: window.height/3,
              color: '#242424',
              marginLeft: 25,
            }}>
            Mobile
          </Text>


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <View
              style={{
                width: window.width-30,
                alignSelf:"center",
                alignContent:"center",
                marginHorizontal:15,
                height: 50,
                borderRadius: 8,
                backgroundColor: '#FFFEFF',
                borderColor:"#EEEEEE",
                borderWidth:1
                // elevation: 4,

              }}>
              <TextInput
                style={{
                  height: 40,
                  marginLeft: 15,
                  marginTop: 7,
                  fontSize: 14,
                  color: '#242424',
                  fontFamily: 'Poppins-Regular',
                }}
                placeholder="Mobile No."
                placeholderTextColor={'#242424'}
                returnKeyType={'next'}
                keyboardType='numeric'
              />
            </View>
          </View>
          <View style={{marginTop:10, width:window.width}}>
            <ButtonStyle bgColor={"#AC9667"} brColor={"#AC9667"} height={54} title={"Get OTP"} onPress={() => navigation.navigate("Home")}/>
          </View>
          <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:10}}>
            <Text style={{color:"#242424", fontSize:14, fontFamily:"Poppins-Regular"}}>Don’t have an Account?</Text>
            <Pressable onPress={() => navigation.navigate("SignUp")}>
              <Text style={{color:"#242424", fontSize:14, fontFamily:"Poppins-Bold"}}> Sign Up</Text>
            </Pressable>
          </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})