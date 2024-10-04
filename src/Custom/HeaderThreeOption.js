import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Platform,
  StatusBar,
  Dimensions,
  Pressable,
  TouchableNativeFeedback,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function HeaderThreeOption(props) {
  // alert(JSON.stringify(props.data))
  const window = Dimensions.get('window');
  const {width, height} = Dimensions.get('window');
  return (
    <View
      style={{
        backgroundColor: '#AC9667',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Pressable onPress={() =>props.backOption()}>
            <Image source={require("../images/zappzo/back_button.png")} style={{height:44, width:44, marginRight:15}}/>
          </Pressable>
        <View style={{alignItems:"center", justifyContent:"center"}}>
          <Text
            style={{
              fontSize: 28,
              color: '#FFFFFF',
              fontFamily: 'Poppins-SemiBold',
              marginLeft:15,
              textAlign:"center"
            }}>
            {props.title}
          </Text>
 
          </View>
          <View style={{flexDirection:"row"}}>
            <Pressable>
                <Image source={require("../images/zappzo/media_screen1.png")} style={{height:24, width:24,marginRight:12}}/>
            </Pressable>
            <TouchableNativeFeedback
                    onPress={() => {
                        props.secondOption()
                    console.log('Button Pressed!');
                    }}
                    background={TouchableNativeFeedback.Ripple('#1f000000', true)} // Ripple effect color
                >
                    <View style={{marginRight:12}}>
                        <Image source={require("../images/zappzo/media_screen2.png")} style={{height:24, width:24, paddingRight:12}}/>
                    </View>
            </TouchableNativeFeedback>
            <Pressable>
                <Image source={require("../images/zappzo/media_screen3.png")} style={{height:24, width:24,marginRight:15}}/>
            </Pressable>
            
            
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerViewOffCss: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#5A73D8',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    // marginBottom: 20,
  },
  titleTextOffCss: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Muli-Bold',
    fontWeight: '700',
    marginTop: 30,
  },
  smailTitleTextOffCss: {
    color: '#606E87',
    fontSize: hp(2),
    fontFamily: 'Avenir-Medium',
    fontWeight: '500',
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  backIcon: {
    // width: 80,
    height: 20,
    resizeMode: 'contain',
  },
  logoIcon: {
    width: 14,
    height: 22,
    resizeMode: 'contain',
    marginTop: 30,
  },
  notificationViewOffCss: {
    width: 13,
    height: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    position: 'absolute',
    right: 0,
  },
  notificationTextOffCss: {
    color: '#fff',
    fontSize: 8,
    fontFamily: 'Avenir-Heavy',
  },
  alrmViewOffCss: {
    width: 30,
    height: 30,
    borderRadius: 8,
    elevation: 5,
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.7,
    //   shadowRadius: 60,
    shadowColor: Platform.OS == 'ios' ? '#00000060' : '#000000',
  },
});

export default HeaderThreeOption;
