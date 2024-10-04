import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, Dimensions } from 'react-native'
import React from 'react'
import DatePicker from 'react-native-date-picker'
import { ButtonStyle } from '../Custom/CustomView'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const window = Dimensions.get('window');

const SignUp = () => {
  return (
    //   <KeyboardAwareScrollView>
<SafeAreaView style={{backgroundColor:"#F3F3F3", flex:1}}>
      <StatusBar barStyle="dark-content" backgroundColor={'#F3F3F3'} />
        <Text style={{fontSize:26, lineHeight:39, color:"#000000", textAlign:"center", marginTop:20, fontFamily:"Poppins-SemiBold"}}>CREATE AN ACCOUNT</Text>

        <View>
      <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 12,
              letterSpacing: 0.4,
            //   marginTop: window.height/5,
              marginTop: 30,
              color: '#242424',
              marginLeft: 25,
            }}>
            Full Name*
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
                backgroundColor: '#EEEEEE',
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
      </View>

      <View>
      <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 12,
              letterSpacing: 0.4,
              marginTop: 20,
              color: '#242424',
              marginLeft: 25,
            }}>
            Email (Optional)*
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
                backgroundColor: '#EEEEEE',
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
      </View>

      <View>
      <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 12,
              letterSpacing: 0.4,
              marginTop: 20,
              color: '#242424',
              marginLeft: 25,
            }}>
            Mobile*
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
                backgroundColor: '#EEEEEE',
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
      </View>

      <View style={{marginTop:10, width:window.width, position:"absolute", bottom:20}}>
            <ButtonStyle bgColor={"#AC9667"} brColor={"#AC9667"} height={54} title={"Update"} onPress={() => navigation.navigate("Home")}/>
          </View>
    </SafeAreaView>
        //   {/* </KeyboardAwareScrollView> */}
  )
}

export default SignUp

const styles = StyleSheet.create({})