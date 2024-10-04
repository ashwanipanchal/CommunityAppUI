import { BackHandler, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, Dimensions, Pressable } from 'react-native'
import React,{useState} from 'react'
import BackHeader from '../Custom/BackHeader'
import { ButtonStyle } from '../Custom/CustomView';
const window = Dimensions.get('window');
import DatePicker from 'react-native-date-picker';
import moment from 'moment'

const CompleteProfile = ({navigation}) => {
    const [open, setOpen] = useState(false)
    const [time, setTime] = useState('')
    const [type, setType] = useState(false)    

  return (
    <SafeAreaView style={{backgroundColor:"#F3F3F3", flex:1}}>
      <StatusBar barStyle="light-content" backgroundColor={'#AC9667'}/>
      <BackHeader title={"Complete Profile"}/>

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
            Username
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
            Select Gender*
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
            Date of Birth*
          </Text>


          <Pressable onPress={() => { setOpen(true), setType(false) }}
                            style={{
                                width: window.width-30,
                                alignSelf:"center",
                                alignContent:"center",
                                marginHorizontal:15,
                                height: 50,
                                borderRadius: 8,
                                marginBottom:15,
                                backgroundColor: '#EEEEEE',
                                borderColor:"#EEEEEE",
                                borderWidth:1
    
                            }}>
                            <TextInput
                                placeholderTextColor="#71717A"
                                style={{
                                    height: 45,
                                    fontSize: 14,
                                    marginLeft: 10,
                                    color: '#71717A',
                                    fontFamily: 'Manrope-Medium',
                                }}
                                placeholder="From"
                                editable={false}
                                value={time != '' ? moment(time).format('hh:mm a') : ''}
                            />

                        </Pressable>
                        <DatePicker
                            modal
                            open={open}
                            mode={'date'}
                            date={ new Date()}
                            onConfirm={date => {
                                setOpen(false);
                                setTime(date);
                                // setTimeA(convertFunc(date))
                                
                            }}
                            onCancel={() => {
                                setOpen(false);
                            }}
                        />
      </View>

      <View style={{marginTop:10, width:window.width, position:"absolute", bottom:20}}>
            <ButtonStyle bgColor={"#AC9667"} brColor={"#AC9667"} height={54} title={"Update"} onPress={() => navigation.navigate("Home")}/>
          </View>
    </SafeAreaView>
  )
}

export default CompleteProfile

const styles = StyleSheet.create({})