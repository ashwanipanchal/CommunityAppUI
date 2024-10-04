import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import React from 'react'
import HomeHeader from '../Custom/HomeHeader'
const window = Dimensions.get('window');

const Home = ({navigation}) => {
    const data = [
        {
            title: "Calls & Chat",
            icon: require("../images/zappzo/home_chat.png")
        },
        {
            title: "Community",
            icon: require("../images/zappzo/home_community.png")
        },
        {
            title: "Business",
            icon: require("../images/zappzo/home_bussiness.png")
        },
    ]

  return (
    <SafeAreaView style={{backgroundColor:"#F3F3F3"}}>
      <StatusBar barStyle="light-content" backgroundColor={'#AC9667'}/>
      <HomeHeader title={"Hi, Anirudh"} rightOption={() => {
            navigation.navigate('Settings');
          }}/>
      <View style={{height:52, backgroundColor:"#EEEEEE", flexDirection:"row",  justifyContent:"space-between", marginHorizontal:15}}>
        <Pressable onPress={() =>navigation.navigate("CompleteProfile")} style={{alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
            <Image source={require("../images/zappzo/progress.png")} style={{height:36, width:36, marginRight:10}}/>
            <View >
                <Text style={{color:"#242424", fontSize:12, fontFamily:"Poppins-SemiBold"}}>Complete Your Profile</Text>
                <Text style={{color:"#242424", fontSize:10, fontFamily:"Poppins-SemiBold"}}>80% Complete</Text>
            </View>
        </Pressable>
        <Image source={require("../images/zappzo/cross.png")} style={{height:24, width:24, alignSelf:"center"}}/>
      </View>

      <FlatList
        data={data}
        numColumns={3}
        // horizontal
        renderItem={({item, index}) => (
            <Pressable onPress={() => {
              if(index == 0){
                navigation.navigate("TabNavigator")
              }
              if(index == 1){

              }
              if(index == 2){

              }
            }} style={{marginTop:20, width:window.width/3-10, marginLeft:5}}>
                <Image source={item.icon} style={{height:100, width:window.width/3, resizeMode:"contain"}}/>
                <Text style={{color:"#242424", fontSize:14, fontFamily:"Poppins-SemiBold", textAlign:"center", marginLeft:8, marginTop:8}}>{item.title}</Text>
            </Pressable>
        )}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})