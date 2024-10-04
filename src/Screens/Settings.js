import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackHeader from '../Custom/BackHeader'
import { Switch } from 'react-native-switch';

const Settings = () => {
    const about_data = [
        {
            title:"About Us",
            icon: require("../images/zappzo/about_us_icon.png")
        },
        {
            title:"Privacy Policy",
            icon: require("../images/zappzo/policy_icon.png")
        },
        {
            title:"Copyright Information",
            icon: require("../images/zappzo/copyright_icon.png")
        },
    ]

    const support_data = [
        {
            title:"FAQs",
            icon: require("../images/zappzo/faq_icon.png")
        },
        {
            title:"Report Bug or Issue",
            icon: require("../images/zappzo/bug_icon.png")
        },
        {
            title:"Feedback",
            icon: require("../images/zappzo/feedback_icon.png")
        },
        {
            title:"Build Number 1.0.1",
            icon: require("../images/zappzo/build_number_icon.png")
        },
    ]
  return (
    <SafeAreaView style={{backgroundColor:"#FFFFFF", flex:1}}>
      <StatusBar barStyle="light-content" backgroundColor={'#AC9667'}/>
      <BackHeader title={"Settings"}/>

      <ScrollView>

      <View style={{height:124, backgroundColor:"#F4F4F4", marginHorizontal:15, marginTop:20, borderRadius:8, flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:20}}>
        <View>
            <Text style={{color:"#000000", fontSize:24, fontFamily:"Poppins-SemiBold"}}>Anirudh Sanadhya</Text>
            <Text style={{color:"#000000", fontSize:12, fontFamily:"Poppins-Regular"}}>anirudhsanadhya@gmail.com</Text>
            <Text style={{color:"#000000", fontSize:12, fontFamily:"Poppins-Regular"}}>+91 98765 43210</Text>
        </View>
        <Image source={require("../images/zappzo/right_arrow.png")} style={{height:24, width:24}}/>
      </View>

      <View style={{height:51, backgroundColor:"#F4F4F4", marginHorizontal:15, marginTop:22, borderRadius:8, flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:20}}>
        <View>
            <Text style={{color:"#000000", fontSize:14, fontFamily:"Poppins-Medium"}}>Notification</Text>
        </View>
        <Switch
            value={true}
            onValueChange={(val) => console.log(val)}
            disabled={false}
            activeText={'On'}
            inActiveText={'Off'}
            circleSize={30}
            barHeight={28}
            circleBorderWidth={1}
            backgroundActive={'#34C759'}
            backgroundInactive={'gray'}
            circleActiveColor={'#FFFFFF'}
            circleInActiveColor={'#000000'}
            // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
            changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
            innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
            outerCircleStyle={{}} // style for outer animated circle
            renderActiveText={false}
            renderInActiveText={false}
            switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
            switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
            switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
            switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
        />
      </View>

      <Text style={{color:"#242424", marginLeft:20, marginTop:25}}>About</Text>
      <FlatList
        data={about_data}
        renderItem={({item}) => (
            <View style={{height:51, backgroundColor:"#F4F4F4", marginHorizontal:15, marginTop:10, borderRadius:8, flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:20}}>
                <View>
                    <Text style={{color:"#000000", fontSize:14, fontFamily:"Poppins-Medium"}}>{item.title}</Text>
                </View>
                <Image source={item.icon} style={{height:24, width:24}}/>
            </View>
        )}
      />

    <Text style={{color:"#242424", marginLeft:20, marginTop:25}}>Support</Text>
      <FlatList
        data={support_data}
        renderItem={({item}) => (
            <View style={{height:51, backgroundColor:"#F4F4F4", marginHorizontal:15, marginTop:10, borderRadius:8, flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:20}}>
                <View>
                    <Text style={{color:"#000000", fontSize:14, fontFamily:"Poppins-Medium"}}>{item.title}</Text>
                </View>
                <Image source={item.icon} style={{height:24, width:24}}/>
            </View>
        )}
      />

        <View style={{height:51, backgroundColor:"#F4F4F4", marginHorizontal:15, marginTop:30, borderRadius:8, flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:20, marginBottom:20}}>
                <View>
                    <Text style={{color:"#DE1F1F", fontSize:14, fontFamily:"Poppins-Medium"}}>Logout</Text>
                </View>
                <Image source={require("../images/zappzo/logout_icon.png")} style={{height:24, width:24}}/>
            </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({})