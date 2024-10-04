import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {textStyle, imageStyle, viewStyle} from '../../styles/style';
import {HomeProperies} from '../../backend/Api';

const PropertySale = () => {
  const isFocused = useIsFocused();
  const window = Dimensions.get('window');
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();
  const [property, setProperty] = useState([
    {
      source: require('../images/ba.png'),
      title: '$50 per month',
      subTitle: '1-4 Beds, 1-2 Baths',
      sub2Title: '252 1st Avenue',
    },
    {
      source: require('../images/ba.png'),
      title: '$50 per month',
      subTitle: '1-4 Beds, 1-2 Baths',
      sub2Title: '252 1st Avenue',
    },
  ]);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    HomeProperies()
      .then(data => {
        // alert(JSON.stringify(data));
        if (data.status) {
          // alert(JSON.stringify(data.sale_propertie, null, 2));
          setProperties(data.sale_propertie.slice(0, 3));
        } else {
          // alertMessage('LabourHome', data.message);
          // navigation.navigate('Otp',{otp:+data.otp,status:false,mobile:+mobile})
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  }, [isFocused]);

  return (
    <View>
      <FlatList
        style={{
          // width: '95%',
          // alignSelf: 'center',
          marginHorizontal: 20,
        }}
        horizontal
        showsHorizontalScrollIndicator={true}
        keyExtractor={item => item.id}
        data={properties}
        renderItem={({item, index}) => (
          <View style={{margin: 5}}>
            <Pressable
              onPress={() => {
                // alert(JSON.stringify(item,null,2))
                // return
                navigation.navigate('PropertyDetails', {
                  id: item.id,
                  lat: item.latitude,
                  lon: item.longitude,
                });
              }}>
              <Image
                style={{
                  width: Dimensions.get('window').width / 2 - 25,
                  height: 140,
                  // margin: 9,
                  borderRadius: 10,
                  marginTop: 15,
                }}
                source={{uri: item.propertie_image[0]?.gallery_image}}
              />
            </Pressable>
            <Text style={textStyle.containText}>${item.selling_price}</Text>
            <Text style={[textStyle.containName, {width: '70%'}]}>
              {item.apartment_name}
            </Text>
            <Text style={textStyle.contain2Text}>
              {/* {item.bathrooms} Baths {item.balconys} Beds */}
              {item.bhk_type}, {item.bathrooms} Baths
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  width: 10,
                  height: 10,
                  resizeMode: 'contain',
                  marginTop: 8,
                }}
                source={require('../images/locat.png')}
              />
              <Text numberOfLines={1} style={textStyle.contain3Text}>
                {item.locality}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default PropertySale;

const styles = StyleSheet.create({});
