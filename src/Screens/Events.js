import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Dimensions, TouchableNativeFeedback, Pressable } from 'react-native'
import React,{useState} from 'react'
import HeaderTwoOption from '../Custom/HeaderTwoOption';
const window = Dimensions.get('window');

const Events = ({navigation}) => {
    const [rippleOverflow, setRippleOverflow] = useState(false);


    const list = [
        {
            image: require("../images/zappzo/event1.png")
        },
        {
            image: require("../images/zappzo/event2.png")
        },
        {
            image: require("../images/zappzo/event1.png")
        },
        {
            image: require("../images/zappzo/event2.png")
        },
    ]
  return (
    <SafeAreaView style={{backgroundColor:"#FFFFFF", flex:1}}>
      <StatusBar barStyle="light-content" backgroundColor={'#AC9667'}/>
      <HeaderTwoOption title={"Events"} firstImage={require("../images/zappzo/media_screen3.png")}secondImage={require("../images/zappzo/search.png")} backOption={() => {
            navigation.goBack();
          }}/>
        <ScrollView>
          <FlatList
            data={list}
            style={{marginTop:14,marginHorizontal:5}}
            horizontal
            renderItem={({item}) => (
                <View>
                    <Image source={item.image} style={{height:128, width:128, margin:6}}/>
                </View>
            )}
          />

            {/*Event  */}
          <View style={{backgroundColor:"#242424", height:265, width:"100%", marginTop:14}}>
            <Text style={{color:"#FFFFFF", fontSize:20, fontFamily:"Poppins-Medium", paddingTop:15, paddingLeft:15, marginBottom:5}}>Events Near You</Text>
            <View style={{flexDirection:"row"}}>
                <Image source={require("../images/zappzo/nearby_event.png")} style={{height:197, width:136, marginLeft:15}}/>
                <View>
                    {/* <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple()} onPress={() => {}} > */}
                    <Pressable onPress={() => navigation.navigate("EventDetails")}>
                        <Text style={{color:"#FFFFFF", fontSize:18, fontFamily:"Poppins-Medium",marginTop:5, paddingLeft:15,}}>Coldplay in Delhi</Text>
                    </Pressable>
                    {/* </TouchableNativeFeedback> */}
                    <Text style={{color:"#FFFFFF", fontSize:10, fontFamily:"Poppins-Regular",marginTop:5, paddingLeft:15, width:window.width/2 +30}}>Sem ac amet sit sagittis nullam aliquet dictum turpis egestas. Odio curabitur ac mi turpis.</Text>

                    <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#4D4D4D",  marginLeft:15, padding:8, marginTop:8, borderRadius:8, alignSelf:'baseline',}}>
                        <Image source={require("../images/zappzo/event_map_pin.png")} style={{height:14, width:14,}}/>
                        <Text style={{color:"#FFFFFF", fontSize:10, fontFamily:"Poppins-Regular",marginLeft:6}}>JLN Stadium, New Delhi</Text>
                    </View>

                    <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#4D4D4D",  marginLeft:15, padding:8, marginTop:8, borderRadius:8, alignSelf:'baseline'}}>
                        <Image source={require("../images/zappzo/event_calender.png")} style={{height:14, width:14,}}/>
                        <Text style={{color:"#FFFFFF", fontSize:10, fontFamily:"Poppins-Regular",marginLeft:6}}>15 July, 2024</Text>
                    </View>

                    <Text style={{color:"#FFFFFF", fontSize:10, fontFamily:"Poppins-Regular",marginTop:5, paddingLeft:15,marginTop:10}}>₹4999 Onwards</Text>

                </View>
            </View>
          </View>

          <View style={{marginTop:15, marginLeft:15, marginRight:15}}>
            <Text style={{color:"#242424", fontSize:20, fontFamily:"Poppins-Medium"}}>Upcoming Events</Text>
            <Image source={require("../images/zappzo/wedding.png")} style={{height:197, width:window.width-30, marginTop:10, borderRadius:8}}/>
            <Text style={{color:"#242424", fontSize:18, fontFamily:"Poppins-Medium", marginTop:6}}>Raj Weds Simran</Text>
            <Text style={{color:"#242424", fontSize:10, fontFamily:"Poppins-Regular"}}>Sem ac amet sit sagittis nullam aliquet dictum turpis egestas. Odio curabitur ac mi turpis.</Text>
            <View style={{flexDirection:"row"}}>
                <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#EEEEEE", padding:8, marginTop:8, borderRadius:8, alignSelf:'baseline',marginRight:6}}>
                    <Image source={require("../images/zappzo/event_map_pin_black.png")} style={{height:14, width:14,resizeMode:"contain"}}/>
                    <Text style={{color:"#242424", fontSize:10, fontFamily:"Poppins-Regular",marginLeft:6}}>JLN Stadium, New Delhi</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#EEEEEE", padding:8, marginTop:8, borderRadius:8, alignSelf:'baseline', marginRight:6}}>
                    <Image source={require("../images/zappzo/event_calender_black.png")} style={{height:14, width:14,resizeMode:"contain"}}/>
                    <Text style={{color:"#242424", fontSize:10, fontFamily:"Poppins-Regular",marginLeft:6}}>11/11/2024</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#EEEEEE", padding:8, marginTop:8, borderRadius:8, alignSelf:'baseline', marginRight:6}}>
                    <Image source={require("../images/zappzo/event_wedding_black.png")} style={{height:14, width:14,resizeMode:"contain"}}/>
                    <Text style={{color:"#242424", fontSize:10, fontFamily:"Poppins-Regular",marginLeft:6}}>Wedding</Text>
                </View>
            </View>
          </View>

          </ScrollView>
    </SafeAreaView>
  )
}

export default Events

const styles = StyleSheet.create({})




// import React from 'react';
// import { View, StyleSheet, Text } from 'react-native';

// const TrapeziumView = () => {
//   return (
//     <View style={styles.container}>
//         <Text style={{color:"#663399", backgroundColor:"white", marginLeft:10, marginTop:30, position:"absolute", top:30}}>HElloooo</Text>
//       <View style={styles.trapezium} >
//       <Text style={styles.questionText}>
//           How many players has a hockey team got on the ice?
//         </Text>
//       <View style={styles.contentContainer}>
//         {/* Corner Decorations */}
        
//         <View style={[styles.corner, styles.topRight]} />
//           <View style={[styles.corner, styles.bottomLeft]} />
//         </View>
//         </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor:"#663399"

//   },
//   trapezium: {
//     width: 200, // Base width
//     // height: 0, // Height set to 0 for border manipulation
//     borderBottomWidth: 100, // Height of the trapezium
//     borderBottomColor: '#fff', // Color of the trapezium
//     borderLeftWidth: 5, // Slanting sides
//     borderLeftColor: 'transparent',
//     borderRightWidth: 10,
//     borderRightColor: 'transparent',
//     transform: [{ scaleX: 1.5 }], // To give the trapezium shape
//   },

//   badgeContainer: {
//     position: 'absolute',
//     top: -15,
//     left: 20,
//     zIndex: 2,
//   },
//   badge: {
//     backgroundColor: '#FFD700',
//     width: 30,
//     height: 30,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: '#000',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   questionText: {
//     color: '#FFFFFF',
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'left',
//     marginTop: 20,
//   },
//   corner: {
//     position: 'absolute',
//     width: 20,
//     height: 20,
//     borderColor: '#FFD700',
//     borderWidth: 2,
//   },
//   topRight: {
//     top: -10,
//     right: -10,
//     borderLeftWidth: 0,
//     borderBottomWidth: 0,
//   },
//   bottomLeft: {
//     bottom: -110,
//     left: -20,
//     borderRightWidth: 0,
//     borderTopWidth: 0,
//   },

//   questionText: {
//     fontSize: 16,
//     fontWeight: '400',
//     width:140,
//     // height:90,
//     lineHeight:24,
//     position:"absolute",
//     left:15,
//     top:10,
//     color: 'red', // Dark purple for the text
//     textAlign: 'center',
//   },
// });

// export default TrapeziumView;



// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
// import Svg, { Path } from 'react-native-svg';

// const DynamicTrapezoid = () => {
//   const [content, setContent] = useState("This is some sample text. Try adding more content to see the trapezoid adjust its height! his is some sample text. Try adding more content to see the trapezoid adjust its height!, his is some sample text. Try adding more content to see the trapezoid adjust its height!");
//   const [contentHeight, setContentHeight] = useState(100);
//   const screenWidth = Dimensions.get('window').width - 40; // Full width minus padding

//   // Calculate trapezoid path based on content height
//   const getTrapezoidPath = (width, height) => {
//     const slopeWidth = width * 0.06; // 10% slope on each side
//     return `
//       M ${slopeWidth} 0
//       L ${width - slopeWidth} 0
//       L ${width} ${height}
//       L 0 ${height}
//       Z
//     `;
//   };

//   const onContentLayout = (event) => {
//     const { height } = event.nativeEvent.layout;
//     setContentHeight(height + 40); // Adding padding
//   };

//   return (
//     <View style={styles.container}>
//       <View style={[styles.trapezoidContainer, { height: contentHeight }]}>
//         {/* Trapezoid Background */}
//         <Svg
//           style={[StyleSheet.absoluteFill]}
//           width={screenWidth}
//           height={contentHeight}
//         >
//           <Path
//             d={getTrapezoidPath(screenWidth, contentHeight)}
//             fill="#3b82f6" // blue-500 equivalent
//           />
//         </Svg>

//         {/* Content */}
//         <Text
//           style={styles.content}
//           onLayout={onContentLayout}
//         >
//           {content}
//         </Text>
//       <View style={styles.contentContainer}>
//         {/* Corner Decorations */}
        
//         <View style={[styles.corner, styles.topRight]} />
//           <View style={[styles.corner, styles.bottomLeft]} />
//         </View>
//       </View>
        



//       {/* Input for testing */}
//       {/* <TextInput
//         style={styles.input}
//         value={content}
//         onChangeText={setContent}
//         multiline
//         placeholder="Edit this text to see the trapezoid adjust..."
//         placeholderTextColor="#666"
//       /> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     gap: 20,
//   },
//   trapezoidContainer: {
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   content: {
//     color: 'white',
//     padding: 20,
//     zIndex: 1,
//   },
//   input: {
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 10,
//     minHeight: 100,
//     textAlignVertical: 'top',
//   },


//   badgeContainer: {
//     position: 'absolute',
//     top: -15,
//     left: 20,
//     zIndex: 2,
//   },
//   badge: {
//     backgroundColor: '#FFD700',
//     width: 30,
//     height: 30,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: '#000',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   questionText: {
//     color: '#FFFFFF',
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'left',
//     marginTop: 20,
//   },
//   corner: {
//     position: 'absolute',
//     width: 20,
//     height: 20,
//     borderColor: '#FFD700',
//     borderWidth: 2,
//   },
//   topRight: {
//     top: -100,
//     right: -180,
//     borderLeftWidth: 0,
//     borderBottomWidth: 0,
//   },
//   bottomLeft: {
//     bottom: -30,
//     left: -200,
//     borderRightWidth: 0,
//     borderTopWidth: 0,
//   },

//   questionText: {
//     fontSize: 16,
//     fontWeight: '400',
//     width:140,
//     // height:90,
//     lineHeight:24,
//     position:"absolute",
//     left:15,
//     top:10,
//     color: 'red', // Dark purple for the text
//     textAlign: 'center',
//   },
// });

// export default DynamicTrapezoid;
