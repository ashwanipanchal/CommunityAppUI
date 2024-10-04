// import React, {useEffect, useState} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   Image,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// const {height} = Dimensions.get('window');

// const Header = () => {
//   const navigation = useNavigation();
//   return (
//     <View style={{backgroundColor: '#fff'}}>
//       <View style={styles.header}>
//         <View>
//           <Image source={require('../images/logo2.png')} style={styles.image} />
//         </View>

//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate('Notification');
//           }}>
//           <Image
//             source={require('../images/bell.png')}
//             style={styles.notificationImage}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Header;

// const styles = StyleSheet.create({
//   image: {
//     width: 100,
//     height: 20,
//     resizeMode: 'contain',
//     // marginTop: 10,
//   },
//   notificationImage: {
//     width: 25,
//     height: 25,
//     resizeMode: 'contain',
//   },
//   header: {
//     flexDirection: 'row',
//     marginTop: StatusBar.currentHeight,
//     marginHorizontal: 20,
//     justifyContent: 'space-between',
//   },
// });
