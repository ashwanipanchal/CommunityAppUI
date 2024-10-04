import React from 'react';
import { Animated, ScrollView, View, Text, StyleSheet } from 'react-native';
import CollapsibleHeader from './CollapsibleHeader';

const HEADER_MAX_HEIGHT = 200;

export default function App() {
  const scrollY = new Animated.Value(0);

  return (
    <View style={styles.container}>
      <CollapsibleHeader scrollY={scrollY} />
      <Animated.ScrollView
        contentContainerStyle={styles.scrollViewContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {/* Your scrollable content goes here */}
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        <Text style={styles.content}>Your content here</Text>
        {/* Add more content... */}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingTop: HEADER_MAX_HEIGHT,
  },
  content: {
    fontSize: 16,
    padding: 20,
  },
});