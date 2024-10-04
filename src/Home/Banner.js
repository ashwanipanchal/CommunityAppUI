import React from 'react';
import {View, Image, ScrollView, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const height = width * 0.3;

const images = [
  {
    source: require('../images/offer.png'),
  },
  {
    source: require('../images/offer.png'),
  },
  {
    source: require('../images/offer.png'),
  },
];

const Banner = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {images.map((item, index) => {
          const {source} = item;
          return (
            <Image
              key={index}
              source={source}
              style={{
                width: 300,
                height: 167,
                marginLeft: 30,
                // marginHorizontal: 30,
                resizeMode: 'contain',
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
export default Banner;
