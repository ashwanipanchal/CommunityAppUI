import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderThreeOption from '../Custom/HeaderThreeOption';

const Media = ({navigation}) => {

  const data = [
    {
    image: require("../images/zappzo/media_avatar1.png"),
    name: "Rishab Kumar",
    time:"1:41 PM"
  },
    {
    image: require("../images/zappzo/media_avatar2.png"),
    name: "Shipla Rao",
    time:"1:41 PM"
  },
    {
    image: require("../images/zappzo/media_avatar3.png"),
    name: "Babita Mukharji",
    time:"1:41 PM"
  },
    {
    image: require("../images/zappzo/media_avatar4.png"),
    name: "Sanya Khanna",
    time:"1:41 PM"
  },
]
  return (
    <SafeAreaView style={{backgroundColor:"#FFFFFFCC", flex:1}}>
      <StatusBar barStyle="light-content" backgroundColor={'#AC9667'}/>
      <HeaderThreeOption title={"Media"} backOption={() => {
            navigation.goBack();
          }} 
          
          secondOption={() =>navigation.navigate("Events")}
          />

      <FlatList
        style={{marginTop:10}}
        data={data}
        renderItem={({item}) => (
          <View style={{flexDirection:"row", justifyContent:"space-between", padding:10, marginTop:6, marginLeft:6, alignItems:"center"}}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
              <Image source={item.image} style={{height:60, width:60, borderWidth:2, borderColor:"#AC9667", borderRadius:10,}}/>
              <Text style={{fontSize:16, color:"#242424", fontFamily:"Poppins-Medium",marginLeft:10}}>{item.name}</Text>
            </View>
            <Text style={{fontSize:10, color:"#777777", fontFamily:"Poppins-Regular", marginRight:15}}>{item.time}</Text>
          </View>
        )}
      />

    </SafeAreaView>
  )
}

export default Media

const styles = StyleSheet.create({})