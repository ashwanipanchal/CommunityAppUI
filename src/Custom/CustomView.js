import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');
const window = Dimensions.get('window');

export const MainView = props => (
  <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}} {...props} />
);

export const BottomView = props => (
  <View style={{marginBottom: 30}} {...props} />
);

export const ButtonStyle = props => {
  const {
    title,
    bgColor,
    txtcolor,
    marginHorizontal,
    onPress,
    brColor,
    height,
    loader,
    fontSize,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.facebookButton,
        {
          height: height ? height : 55,
          backgroundColor: bgColor ? bgColor : '#DC2F2E',
          borderColor: brColor ? brColor : '#DC2F2E',
          borderWidth:1,
          marginHorizontal: marginHorizontal ? marginHorizontal : 15,
        },
      ]}>
      {loader ? (
        <View
          style={{height: 24, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={'#fff'} size={'small'} />
        </View>
      ) : (
        <Text
          style={[
            styles.facebooktext,
            {
              fontSize: fontSize ? fontSize : 14,
              fontFamily:"Poppins-Medium",
              // lineHeight:17,
              color: txtcolor ? txtcolor : '#fff',
            },
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export const ButtonStyle1 = props => {
  const {
    title,
    bgColor,
    txtcolor,
    marginHorizontal,
    onPress,
    height,
    loader,
    fontSize,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.facebookButton,
        {
          height: height ? height : 45,
          backgroundColor: bgColor ? bgColor : '#fff',
          marginHorizontal: marginHorizontal ? marginHorizontal : 25,
          borderWidth: 1,
          borderColor: '#DC2F2E',
        },
      ]}>
      {loader ? (
        <View
          style={{height: 24, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={'#fff'} size={'small'} />
        </View>
      ) : (
        <Text
          style={[
            styles.facebooktext,
            {
              fontSize: fontSize ? fontSize : 16,
              color: txtcolor ? txtcolor : '#DC2F2E',
            },
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export const ButtonStyle2 = props => {
  const {
    title,
    bgColor,
    txtcolor,
    marginHorizontal,
    onPress,
    height,
    loader,
    fontSize,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.facebookButton,
        {
          height: height ? height : 45,
          backgroundColor: bgColor ? bgColor : '#DC2F2E',
          marginHorizontal: marginHorizontal ? marginHorizontal : 25,
        },
      ]}>
      {loader ? (
        <View
          style={{height: 24, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={'#fff'} size={'small'} />
        </View>
      ) : (
        <Text
          style={[
            styles.facebooktext,
            {
              fontSize: fontSize ? fontSize : 16,
              color: txtcolor ? txtcolor : '#fff',
            },
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export const ButtonStyle3 = props => {
  const {
    title,
    bgColor,
    txtcolor,
    marginHorizontal,
    onPress,
    height,
    loader,
    fontSize,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.facebookButton,
        {
          height: height ? height : 55,
          paddingHorizontal:20,
          backgroundColor: bgColor ? bgColor : '#DC2F2E',
          marginHorizontal: marginHorizontal ? marginHorizontal : 25,
        },
      ]}>
      {loader ? (
        <View
          style={{height: 24, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={'#fff'} size={'small'} />
        </View>
      ) : (
        <Text
          style={[
            styles.facebooktext,
            {
              fontSize: fontSize ? fontSize : 16,
              color: txtcolor ? txtcolor : '#fff',
            },
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export const LocationStyle = props => {
  const {
    title,
    bgColor,
    txtcolor,
    marginHorizontal,
    onPress,
    height,
    loader,
    fontSize,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.facebookButton,
        {
          height: height ? height : 55,
          backgroundColor: bgColor ? bgColor : '#DC2F2E',
          marginHorizontal: marginHorizontal ? marginHorizontal : 25,
        },
      ]}>
      {loader ? (
        <View
          style={{height: 24, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={'#fff'} size={'small'} />
        </View>
      ) : (
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              alignItems: 'center',
              margin: 10,
            }}
            source={require('../images/location.png')}
          />
          <Text
            style={[
              styles.facebooktext,
              {
                fontSize: fontSize ? fontSize : 16,
                color: txtcolor ? txtcolor : '#fff',
              },
            ]}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
export const SubLocationStyle = props => {
  const {
    title,
    bgColor,
    txtcolor,
    marginHorizontal,
    onPress,
    height,
    loader,
    fontSize,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.facebookButton,
        {
          height: height ? height : 55,
          backgroundColor: bgColor ? bgColor : '#fff',
          marginHorizontal: marginHorizontal ? marginHorizontal : 25,
        },
      ]}>
      {loader ? (
        <View
          style={{height: 24, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={'#fff'} size={'small'} />
        </View>
      ) : (
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              alignItems: 'center',
              margin: 10,
            }}
            source={require('../images/search.png')}
          />
          <Text
            style={[
              styles.facebooktext,
              {
                fontSize: fontSize ? fontSize : 16,
                color: txtcolor ? txtcolor : '#DC2F2E',
              },
            ]}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export const StartButton = props => {
  const {
    title,
    bgColor,
    txtcolor,
    marginHorizontal,
    onPress,
    height,
    loader,
    fontSize,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.facebookButton,
        {
          height: height ? height : 35,
          backgroundColor: bgColor ? bgColor : '#DE3F3F',
          marginHorizontal: marginHorizontal ? marginHorizontal : 10,
        },
      ]}>
      {loader ? (
        <View
          style={{height: 24, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={'#fff'} size={'small'} />
        </View>
      ) : (
        <Text
          style={[
            styles.facebooktext,
            {
              fontSize: fontSize ? fontSize : 12,
              color: txtcolor ? txtcolor : '#fff',
            },
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  facebookButton: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B8B8D2',
  },
  facebooktext: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    alignSelf: 'center',
  },
  containerStyle: {
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#1B172C',
    marginTop: 40,
  },
  inputContainerStyle: {
    marginHorizontal: 20,
    backgroundColor: '#1B172C',
  },
});

export const EndButton = props => {
  const {
    title,
    bgColor,
    txtcolor,
    marginHorizontal,
    onPress,
    height,
    fontSize,
    bcolor,
    bredius,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        btnstyles.facebookButton,
        {
          height: height ? height : 35,
          backgroundColor: bgColor ? bgColor : '#fff',
          marginHorizontal: marginHorizontal ? marginHorizontal : 10,
          borderColor: bcolor ? bcolor : '#1F1F39',
          borderRadius: bredius ? bredius : 10,
        },
      ]}>
      <Text
        style={[
          btnstyles.facebooktext,
          {
            fontSize: fontSize ? fontSize : 14,
            color: txtcolor ? txtcolor : '#1F1F39',
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const btnstyles = StyleSheet.create({
  facebookButton: {
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  facebooktext: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    alignSelf: 'center',
  },
  containerStyle: {
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#1B172C',
    marginTop: 40,
  },
  inputContainerStyle: {
    marginHorizontal: 20,
    backgroundColor: '#1B172C',
  },
});
export const Property = props => {
  const {
    title,
    bgColor,
    txtcolor,
    marginHorizontal,
    onPress,
    height,
    fontSize,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        btnstyles.facebookButton,
        {
          height: height ? height : 35,
          backgroundColor: bgColor ? bgColor : '#DE3F3F',
          marginHorizontal: marginHorizontal ? marginHorizontal : 10,
        },
      ]}>
      <Text
        style={[
          btnstyles.facebooktext,
          {
            fontSize: fontSize ? fontSize : 14,
            color: txtcolor ? txtcolor : '#1F1F39',
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const PaymentButton = props => {
  const {
    title,
    bgColor,
    txtcolor,
    marginHorizontal,
    onPress,
    height,
    fontSize,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        btnstyles1.facebookButton,
        {
          height: height ? height : 35,
          backgroundColor: bgColor ? bgColor : '#fff',
          marginHorizontal: marginHorizontal ? marginHorizontal : 10,
        },
      ]}>
      <Text
        style={[
          btnstyles1.facebooktext,
          {
            fontSize: fontSize ? fontSize : 14,
            color: txtcolor ? txtcolor : '#DC2F2E',
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export const HistoryButton = props => {
  const {
    title,
    bgColor,
    txtcolor,
    marginHorizontal,
    onPress,
    height,
    fontSize,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        btnstyles2.facebookButton,
        {
          height: height ? height : 35,
          backgroundColor: bgColor ? bgColor : '#fff',
          marginHorizontal: marginHorizontal ? marginHorizontal : 10,
        },
      ]}>
      <Text
        style={[
          btnstyles2.facebooktext,
          {
            fontSize: fontSize ? fontSize : 14,
            color: txtcolor ? txtcolor : '#2F4858',
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const btnstyles1 = StyleSheet.create({
  facebookButton: {
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DC2F2E',
  },
  facebooktext: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    alignSelf: 'center',
  },
  containerStyle: {
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#1B172C',
    marginTop: 40,
  },
  inputContainerStyle: {
    marginHorizontal: 20,
    backgroundColor: '#1B172C',
  },
});
const btnstyles2 = StyleSheet.create({
  facebookButton: {
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2F4858',
  },
  facebooktext: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    alignSelf: 'center',
  },
  containerStyle: {
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#1B172C',
    marginTop: 40,
  },
  inputContainerStyle: {
    marginHorizontal: 20,
    backgroundColor: '#1B172C',
  },
});

export const Disable = props => {
  const {
    title,
    bgColor,
    txtcolor,
    marginHorizontal,
    onPress,
    loader,
    height,
    fontSize,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        disStyle.facebookButton,
        {
          height: height ? height : 45,
          backgroundColor: bgColor ? bgColor : '#5A73D8',
          marginHorizontal: marginHorizontal ? marginHorizontal : 15,
        },
      ]}>
      {loader ? (
        <View
          style={{height: 24, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={'#fff'} size={'small'} />
        </View>
      ) : (
        <Text
          style={[
            disStyle.facebooktext,
            {
              fontSize: fontSize ? fontSize : 16,
              color: txtcolor ? txtcolor : '#fff',
            },
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const disStyle = StyleSheet.create({
  facebookButton: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  facebooktext: {
    fontFamily: 'Muli',
    fontWeight: '700',
    alignSelf: 'center',
  },
  containerStyle: {
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#1B172C',
    marginTop: 40,
  },
  inputContainerStyle: {
    marginHorizontal: 20,
    backgroundColor: '#1B172C',
  },
});

export const Started = props => {
  const {
    title,
    bgColor,
    txtcolor,
    marginHorizontal,
    onPress,
    height,
    fontSize,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        strStyle.facebookButton,
        {
          height: height ? height : 45,
          backgroundColor: bgColor ? bgColor : 'grey',
          marginHorizontal: marginHorizontal ? marginHorizontal : 10,
        },
      ]}>
      <Text
        style={[
          strStyle.facebooktext,
          {
            fontSize: fontSize ? fontSize : 16,
            color: txtcolor ? txtcolor : '#fff',
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const strStyle = StyleSheet.create({
  facebookButton: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebooktext: {
    fontFamily: 'Mulish-Bold',
    fontWeight: '700',
    alignSelf: 'center',
  },
  containerStyle: {
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#1B172C',
    marginTop: 40,
  },
  inputContainerStyle: {
    marginHorizontal: 20,
    backgroundColor: '#1B172C',
  },
});

export const SubHeader = props => (
  <View style={SubheaderStyle.flexView}>
    {/* <ImageBackground
      style={{width: '100%', height: 260, resizeMode: 'contain'}}
      source={require('../images/background.png')}>
      <TouchableOpacity
        style={SubheaderStyle.touchBack}
        onPress={props.onPress}>
        <Image
          source={require('../images/back.png')}
          style={SubheaderStyle.imageBack}
        />
      </TouchableOpacity>
      <Text style={SubheaderStyle.textTitle}>{props.title}</Text>
    </ImageBackground> */}
  </View>
);

const SubheaderStyle = StyleSheet.create({
  viewHeader: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
  },
  imageBack: {
    width: 12,
    height: 22,
    resizeMode: 'contain',
    marginTop: 50,
    marginLeft: 20,
  },
  touchBack: {
    position: 'absolute',
    left: 0,
  },
  textTitle: {
    fontFamily: 'Muli',
    fontWeight: '500',
    fontSize: 20,
    color: '#fff',
    marginTop: 45,
    textAlign: 'center',
  },
  flexView: {
    flexDirection: 'row',
    // marginTop: 40,
    // marginLeft: 10,
    alignItems: 'center',
  },
  sharePic: {
    width: 20,
    height: 24,
    marginLeft: 'auto',
    marginHorizontal: 15,
    marginTop: -25,
  },
});

export const Header = props => (
  <View style={headerStyle.flexView}>
    <TouchableOpacity style={headerStyle.touchBack} onPress={props.onPress}>
      {/* <Image
        source={require('../images/e-remove.png')}
        style={headerStyle.imageBack}
      /> */}
    </TouchableOpacity>
    <Text style={headerStyle.textTitle}>{props.title}</Text>
  </View>
);

const headerStyle = StyleSheet.create({
  viewHeader: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
  },
  imageBack: {
    width: 15,
    height: 22,
    resizeMode: 'contain',
    marginTop: 30,
    marginLeft: 30,
  },
  touchBack: {
    position: 'absolute',
    left: 0,
    width: '20%',
  },
  textTitle: {
    fontFamily: 'Muli',
    fontWeight: '500',
    fontSize: 20,
    color: '#fff',
    marginTop: 45,
    textAlign: 'center',
  },
  flexView: {
    flexDirection: 'row',
    // marginTop: 40,
    // marginLeft: 10,
    alignItems: 'center',
  },
});

export const Header2 = props => (
  <View style={header3Style.viewHeader}>
    <View style={header3Style.flexView}>
      {/* <Image
        source={require('../images/logo2.png')}
        style={header3Style.imageBack}
      /> */}
      <Text style={header3Style.textTitle}>{props.title}</Text>
      {/* <Image source={require('../images/bell.png')} style={header3Style.Pic} /> */}
    </View>
  </View>
);

const header3Style = StyleSheet.create({
  viewHeader: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
  },
  imageBack: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginTop: 50,
    // marginLeft: 10,
  },
  touchBack: {
    position: 'absolute',
    left: 0,
  },
  textTitle: {
    fontFamily: 'Muli',
    fontWeight: '500',
    fontSize: 20,
    color: '#fff',
    marginTop: 45,
    textAlign: 'center',
  },
  flexView: {
    flexDirection: 'row',
    // marginTop: 40,
    // marginLeft: 10,
    alignItems: 'center',
  },
  sharePic: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginLeft: 'auto',
    marginHorizontal: 15,
    marginTop: 50,
  },
  Pic: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginLeft: 'auto',
    marginHorizontal: 10,
    marginTop: 55,
  },
});
// export const Header3 = props => (
//   <View style={header4Style.viewHeader}>
//     <View style={header4Style.flexView}>
//       <Image
//         source={require('../images/Reruiting-agent-slice/logo.png')}
//         style={header4Style.imageBack}
//       />
//       <Text style={header4Style.textTitle}>{props.title}</Text>
//       <Image
//         source={require('../images/Reruiting-agent-slice/project-exporter/notification.png')}
//         style={header4Style.Pic}
//       />
//     </View>
//   </View>
// );

// const header4Style = StyleSheet.create({
//   viewHeader: {
//     width: '100%',
//     backgroundColor: '#2574FF',
//     padding: 20,
//   },
//   imageBack: {
//     width: 40,
//     height: 40,
//     resizeMode: 'contain',
//     marginTop: 50,
//     marginLeft: 10,
//   },
//   touchBack: {
//     position: 'absolute',
//     left: 0,
//   },
//   textTitle: {
//     fontFamily: 'Muli',
//     fontWeight: '500',
//     fontSize: 20,
//     color: '#fff',
//     marginTop: 45,
//     textAlign: 'center',
//   },
//   flexView: {
//     flexDirection: 'row',
//     // marginTop: 40,
//     // marginLeft: 10,
//     alignItems: 'center',
//   },
//   sharePic: {
//     width: 22,
//     height: 22,
//     resizeMode: 'contain',
//     marginLeft: 'auto',
//     marginHorizontal: 15,
//     marginTop: 50,
//   },
//   Pic: {
//     width: 22,
//     height: 22,
//     resizeMode: 'contain',
//     marginLeft: 'auto',
//     marginHorizontal: 15,
//     marginTop: 50,
//   },
// });

export const HeaderDark = props => (
  <View style={header2Style.viewHeader}>
    <View style={header2Style.flexView}>
      <TouchableOpacity style={header2Style.touchBack} onPress={props.onPress}>
        <Image
          source={require('../images/arrow1.png')}
          style={header2Style.imageBack}
        />
      </TouchableOpacity>
      <Text style={header2Style.textTitle}>{props.title}</Text>
    </View>
  </View>
);

const header2Style = StyleSheet.create({
  viewHeader: {
    width: '100%',
    backgroundColor: '#DC2F2E',
    paddingHorizontal: 10,
  },
  imageBack: {
    width: 12,
    height: 22,
    resizeMode: 'contain',
    // marginTop: 5,
  },
  touchBack: {
    position: 'absolute',
    left: 0,
    width: '20%',
  },
  textTitle: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: '#fff',
    marginLeft: 30,
    // marginTop: 5,
    // marginHorizontal: 30,
  },
  flexView: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
});

export const Headerback = props => (
  <View style={headerbackStyle.viewHeader}>
    <View style={headerbackStyle.flexView}>
      <TouchableOpacity
        style={headerbackStyle.touchBack}
        onPress={props.onPress}>
        <Image
          source={require('../images/arrow1.png')}
          style={headerbackStyle.imageBack}
        />
      </TouchableOpacity>
      <Text style={headerbackStyle.textTitle}>{props.title}</Text>
    </View>
  </View>
);

const headerbackStyle = StyleSheet.create({
  viewHeader: {
    width: '100%',
    backgroundColor: '#000',
    paddingHorizontal: 10,
  },
  imageBack: {
    width: 12,
    height: 22,
    resizeMode: 'contain',
    // marginTop: 5,
  },
  touchBack: {
    position: 'absolute',
    left: 0,
    width: '20%',
  },
  textTitle: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: '#fff',
    marginLeft: 30,
    // marginTop: 5,
    // marginHorizontal: 30,
  },
  flexView: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
});

export const LocationDark = props => (
  <View style={loc3Style.viewHeader}>
    <View style={loc3Style.flexView}>
      <TouchableOpacity style={loc3Style.touchBack} onPress={props.onPress}>
        <Image
          source={require('../images/arrow1.png')}
          style={loc3Style.imageBack}
        />
      </TouchableOpacity>
      <Text style={loc3Style.textTitle}>{props.title}</Text>
    </View>
    {/* <View style={[loc3Style.flexView]}>
      <View style={loc3Style.touchBack}>
        <Image
          source={require('../images/locatio.png')}
          style={loc3Style.image2Back}
        />
      </View>
      <Text
        numberOfLines={2}
        style={[
          loc3Style.text2Title,
          {width: window.width - 260, textAlign: 'right'},
        ]}>
        {props.location}
      </Text>
    </View> */}

    <View
      style={{
        flexDirection: 'row',
        marginTop: 15,
        width: window.width - 280,
      }}>
      <Image
        source={require('../images/locatio.png')}
        style={{width: 12, height: 22, resizeMode: 'contain', marginRight: 10}}
      />
      <Text
        numberOfLines={2}
        style={{
          fontFamily: 'Montserrat-Regular',
          fontWeight: '400',
          fontSize: 12,
          marginTop: 2,
          color: '#fff',
        }}>
        {props.location}
      </Text>
    </View>
  </View>
);

const loc3Style = StyleSheet.create({
  viewHeader: {
    width: '100%',
    backgroundColor: '#DC2F2E',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageBack: {
    width: 12,
    height: 22,
    resizeMode: 'contain',
    // marginTop: 5,
  },
  image2Back: {
    width: 12,
    height: 22,
    resizeMode: 'contain',
    marginLeft: 10,
    // marginTop: 5,
  },
  touchBack: {
    position: 'absolute',
    left: 0,
    width: '20%',
  },
  textTitle: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: '#fff',
    marginLeft: 30,
    // marginTop: 5,
    // marginHorizontal: 30,
  },
  text2Title: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: '#fff',
    marginLeft: 30,
    // marginTop: 5,
  },
  flexView: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
});

export const HeaderLight = props => (
  <View style={subheader.viewHeader}>
    <View style={subheader.flexView}>
      <TouchableOpacity style={subheader.touchBack} onPress={props.onPress}>
        {/* <Image
          source={require('../images/e-remove.png')}
          style={subheader.imageBack}
        /> */}
      </TouchableOpacity>
      <Text style={subheader.textTitle}>{props.title}</Text>
    </View>
  </View>
);

const subheader = StyleSheet.create({
  viewHeader: {
    width: '100%',
    backgroundColor: '#F7F7F7',
    padding: 20,
    // marginTop: 40,
  },
  imageBack: {
    width: 12,
    height: 22,
    resizeMode: 'contain',
    marginTop: 5,
  },
  touchBack: {
    position: 'absolute',
    left: 0,
    width: '20%',
  },
  textTitle: {
    fontFamily: 'Catamaran-Bold',
    fontWeight: '700',
    fontSize: 20,
    color: '#333333',
    marginHorizontal: 40,
  },
  flexView: {
    flexDirection: 'row',
    // marginTop: 30,
    marginLeft: 10,
    alignItems: 'center',
  },
});

export const BottomButton = props => {
  const {
    title,
    bgColor,
    txtcolor,
    marginHorizontal,
    onPress,
    height,
    fontSize,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        bottomStyle.facebookButton,
        {
          height: height ? height : 55,
          backgroundColor: bgColor ? bgColor : '#0AE8AF',
          marginHorizontal: marginHorizontal ? marginHorizontal : 10,
        },
      ]}>
      <Text
        style={[
          bottomStyle.facebooktext,
          {
            fontSize: fontSize ? fontSize : 16,
            color: txtcolor ? txtcolor : '#fff',
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const bottomStyle = StyleSheet.create({
  facebookButton: {
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
  },
  facebooktext: {
    fontFamily: 'Rubik-Medium',
    fontWeight: '500',
    alignSelf: 'center',
  },
  containerStyle: {
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#1B172C',
    marginTop: 40,
  },
  inputContainerStyle: {
    marginHorizontal: 20,
    backgroundColor: '#1B172C',
  },
});

// export const CustomTextField = props => (
//   <TextField
//     fontSize={18}
//     textColor={'#1E2432'}
//     tintColor={'grey'}
//     containerStyle={{
//       backgroundColor: '#FFFFFF',
//       marginTop: 20,
//       marginHorizontal: 20,
//       borderRadius: 10,
//       shadowColor: '#000',
//       shadowOffset: {
//         width: 0,
//         height: 2,
//       },
//       shadowOpacity: 0.23,
//       shadowRadius: 2.62,
//       marginBottom: 10,
//       elevation: 4,
//     }}
//     inputContainerStyle={{marginHorizontal: 20, height: 48}}
//     {...props}
//   />
// );
