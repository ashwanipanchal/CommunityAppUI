import { View, Text, SafeAreaView, ScrollView, StatusBar, Image, Dimensions, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import HeaderTwoOption from '../Custom/HeaderTwoOption';
import MapView from 'react-native-maps';
const window = Dimensions.get('window');

const EventDetails = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor:"#FFFFFF", flex:1}}>
    <StatusBar barStyle="light-content" backgroundColor={'#AC9667'}/>
    <HeaderTwoOption title={"Events"} firstImage={require("../images/zappzo/media_screen3.png")}secondImage={require("../images/zappzo/search.png")} backOption={() => {
          navigation.goBack();
        }}/>
      <ScrollView>
        <Image source={require("../images/zappzo/event_full_picture.png")} style={{height:197, width:Dimensions.get("window").width}}/>

        <View style={{marginTop:15, marginLeft:15, marginRight:15}}>
            <Text style={{color:"#242424", fontSize:18, fontFamily:"Poppins-Medium", marginTop:6}}>Coldplay in Delhi</Text>
            <Text style={{color:"#242424", fontSize:10, fontFamily:"Poppins-Regular", marginTop:5}}>Sem ac amet sit sagittis nullam aliquet dictum turpis egestas. Odio curabitur ac mi turpis.</Text>
            <View style={{flexDirection:"row"}}>
                <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#EEEEEE", padding:8, marginTop:8, borderRadius:8, alignSelf:'baseline',marginRight:6}}>
                    <Image source={require("../images/zappzo/event_map_pin_black.png")} style={{height:14, width:14,resizeMode:"contain"}}/>
                    <Text style={{color:"#242424", fontSize:10, fontFamily:"Poppins-Regular",marginLeft:6}}>JLN Stadium, New Delhi</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#EEEEEE", padding:8, marginTop:8, borderRadius:8, alignSelf:'baseline', marginRight:6}}>
                    <Image source={require("../images/zappzo/event_calender_black.png")} style={{height:14, width:14,resizeMode:"contain"}}/>
                    <Text style={{color:"#242424", fontSize:10, fontFamily:"Poppins-Regular",marginLeft:6}}>11/11/2024</Text>
                </View>
                {/* <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#EEEEEE", padding:8, marginTop:8, borderRadius:8, alignSelf:'baseline', marginRight:6}}>
                    <Image source={require("../images/zappzo/event_wedding_black.png")} style={{height:14, width:14,resizeMode:"contain"}}/>
                    <Text style={{color:"#242424", fontSize:10, fontFamily:"Poppins-Regular",marginLeft:6}}>Wedding</Text>
                </View> */}
            </View>
          </View>

          <Text style={{color:"#242424", fontSize:12, fontFamily:"Poppins-Regular",marginLeft:20, marginTop:24}}>Media</Text>
          <FlatList
            data={[require("../images/zappzo/event1.png"), require("../images/zappzo/event2.png"),require("../images/zappzo/event1.png"), require("../images/zappzo/event2.png"),]}
            style={{marginHorizontal:5}}
            horizontal
            renderItem={({item}) => (
                <View>
                    <Image source={item} style={{height:100, width:100, margin:6}}/>
                </View>
            )}
          />

        <Text style={{color:"#242424", fontSize:12, fontFamily:"Poppins-Regular",marginLeft:20, marginTop:15}}>Artist</Text>
          <FlatList
            data={[require("../images/zappzo/media_avatar1.png"), require("../images/zappzo/media_avatar2.png"),require("../images/zappzo/media_avatar3.png"), require("../images/zappzo/media_avatar4.png"),]}
            style={{marginHorizontal:5}}
            horizontal
            renderItem={({item}) => (
                <View>
                    <Image source={item} style={{height:71, width:71, margin:6}}/>
                    <Text>{}</Text>
                </View>
            )}
          />

        <Text style={{color:"#242424", fontSize:12, fontFamily:"Poppins-Regular",marginLeft:20,}}>Get Location</Text>
        <View style={{height:152, marginHorizontal:15, overflow: 'hidden' ,borderRadius: 10, marginTop:5}}>

        <MapView
        style={[styles.map,{borderRadius:10}]}
            initialRegion={{
                latitude: 28.7041,
                longitude: 77.1025,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default EventDetails

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
      }
})


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const EventDetails = ({ questionNumber, question }) => {
//   return (
//     <View style={styles.container}>
//       {/* Main Card */}
//       <View style={styles.card}>
//         {/* Number Badge */}
//         <View style={styles.badgeContainer}>
//           <View style={styles.badge}>
//             <Text style={styles.badgeText}>{questionNumber}</Text>
//           </View>
//         </View>
        
//         {/* Question Text */}
//         <Text style={styles.questionText}>{question}</Text>
        
//         {/* Corner Decorations */}
//         <View style={[styles.corner, styles.topRight]} />
//         <View style={[styles.corner, styles.bottomLeft]} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor:"black"
//   },
//   card: {
//     backgroundColor: '#663399', // Purple background
//     // borderRadius: 10,
//     padding: 20,
//     // minHeight: 150,
//     borderLeftWidth: 5, // Slanting sides
//     borderLeftColor: 'transparent',
//     borderRightWidth: 20,
//     borderRightColor: 'red',
//     justifyContent: 'center',
//     position: 'relative',
//   },
//   badgeContainer: {
//     position: 'absolute',
//     top: -15,
//     left: 20,
//     zIndex: 1,
//   },
//   badge: {
//     backgroundColor: '#FFD700', // Yellow badge
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
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'left',
//     marginTop: 20,
//   },
//   corner: {
//     position: 'absolute',
//     width: 20,
//     height: 20,
//     borderColor: '#FFD700', // Yellow corners
//     borderWidth: 2,
//   },
//   topRight: {
//     top: -10,
//     right: -10,
//     borderLeftWidth: 0,
//     borderBottomWidth: 0,
//   },
//   bottomLeft: {
//     bottom: -10,
//     left: -10,
//     borderRightWidth: 0,
//     borderTopWidth: 0,
//   },
// });

// export default EventDetails;

// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';

// const screenWidth = Dimensions.get('window').width;

// const EventDetails = ({ questionNumber, question }) => {
//   return (
//     <View style={styles.container}>
//       {/* Trapezium shape wrapper */}
//       <View style={styles.trapeziumWrapper}>
//         {/* Main content */}
//         <View style={styles.contentContainer}>
//           {/* Number Badge */}
//           <View style={styles.badgeContainer}>
//             <View style={styles.badge}>
//               <Text style={styles.badgeText}>{questionNumber}</Text>
//             </View>
//           </View>
          
//           {/* Question Text */}
//           <Text style={styles.questionText}>{question}</Text>
          
//           {/* Corner Decorations */}
//           <View style={[styles.corner, styles.topRight]} />
//           <View style={[styles.corner, styles.bottomLeft]} />
//         </View>

//         {/* Slanted sides */}
//         <View style={styles.leftSlant} />
//         <View style={styles.rightSlant} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     alignItems: 'center',
//   },
//   trapeziumWrapper: {
//     width: screenWidth * 0.85,
//     height: 120,
//     position: 'relative',
//   },
//   contentContainer: {
//     position: 'absolute',
//     backgroundColor: '#663399',
//     top: 0,
//     left: 20, // Adjust this to control how much the sides slant
//     right: 20, // Adjust this to control how much the sides slant
//     bottom: 0,
//     // borderRadius: 8,
//     padding: 20,
//     zIndex: 1,
//   },
//   leftSlant: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: 30, // Width of the slant
//     height: '100%',
//     backgroundColor: '#663399',
//     transform: [
//       { skewX: '40deg' },
//       { translateX: 40 }, // Adjust to connect with main container
//     ],
//   },
//   rightSlant: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     width: 10, // Width of the slant
//     height: '100%',
//     borderRightWidth: 10,
//     borderRightColor: 'transparent',

//     backgroundColor: 'red',
//     zIndex:9,
//     transform: [
//       { skewX: '35deg' },
//       { translateX: -10 }, // Adjust to connect with main container
//     ],
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
//     top: 10,
//     right: 10,
//     borderLeftWidth: 0,
//     borderBottomWidth: 0,
//   },
//   bottomLeft: {
//     bottom: 10,
//     left: 10,
//     borderRightWidth: 0,
//     borderTopWidth: 0,
//   },
// });

// export default EventDetails;