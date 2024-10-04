
// import React from 'react';
// import { Animated, StyleSheet, View, Image, Platform } from 'react-native';

// const HEADER_MAX_HEIGHT = 200;
// const HEADER_MIN_HEIGHT = 60;
// const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

// export default function CollapsibleHeader({ scrollY }) {
//   const headerTranslate = scrollY.interpolate({
//     inputRange: [0, HEADER_SCROLL_DISTANCE],
//     outputRange: [0, -HEADER_SCROLL_DISTANCE],
//     extrapolate: 'clamp',
//   });

//   const imageOpacity = scrollY.interpolate({
//     inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
//     outputRange: [1, 1, 0],
//     extrapolate: 'clamp',
//   });

//   const imageTranslate = scrollY.interpolate({
//     inputRange: [0, HEADER_SCROLL_DISTANCE],
//     outputRange: [0, 100],
//     extrapolate: 'clamp',
//   });

//   const imageScale = scrollY.interpolate({
//     inputRange: [0, HEADER_SCROLL_DISTANCE],
//     outputRange: [1, 0.75],
//     extrapolate: 'clamp',
//   });

//   return (
//     <Animated.View
//       style={[
//         styles.header,
//         { transform: [{ translateY: headerTranslate }] },
//       ]}
//     >
//       <Animated.Image
//         style={[
//           styles.backgroundImage,
//           {
//             opacity: imageOpacity,
//             transform: [
//               { translateY: imageTranslate },
//               { scale: imageScale },
//             ],
//           },
//         ]}
//         source={{ uri: 'https://example.com/your-image.jpg' }}
//       />
//     </Animated.View>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: '#03A9F4',
//     overflow: 'hidden',
//     height: HEADER_MAX_HEIGHT,
//   },
//   backgroundImage: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     width: null,
//     height: HEADER_MAX_HEIGHT,
//     resizeMode: 'cover',
//   },
// }); 

import React from 'react';
import { Animated, StyleSheet, View, Image, Platform,Dimensions } from 'react-native';
const window = Dimensions.get('window');


const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default function CollapsibleHeader({ scrollY }) {
  const headerTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  const imageTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const imageScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.75],
    extrapolate: 'clamp',
  });

  // New animations for the additional image
  const smallImageScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.5],
    extrapolate: 'clamp',
  });

  const smallImageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, HEADER_SCROLL_DISTANCE / 4],
    extrapolate: 'clamp',
  });

  const smallImageTranslateX = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 50],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.header,
        { transform: [{ translateY: headerTranslate }] },
      ]}
    >
      <Animated.Image
        style={[
          styles.backgroundImage,
          {
            opacity: imageOpacity,
            transform: [
              { translateY: imageTranslate },
              { scale: imageScale },
            ],
          },
        ]}
        source={{ uri: 'https://example.com/your-background-image.jpg' }}
      />
      <Animated.Image
        style={[
          styles.smallImage,
          {
            transform: [
              { scale: smallImageScale },
              { translateY: smallImageTranslateY },
              { translateX: smallImageTranslateX },
            ],
            position:"absolute",
            bottom: -20,
            left:window.width/2-40,
          },
        ]}
        source={{ uri: 'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp' }}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#AC9667',
    // overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // backgroundColor:"red",
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  smallImage: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 80,
    backgroundColor:"green",
    height: 80,
    borderRadius: 40,
  },
});