import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React from 'react';
import {StartButton} from './CustomView';
const {height, width} = Dimensions.get('window');

const Modaal = () => {
  alert('tick tock');
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor={'#2B2D42'} />
      <Modal
        visible={modalOpen}
        transparent={true}
        onRequestClose={() => setModalOpen(false)}>
        <View style={styles.modal_View}>
          <View
            activeOpacity={0.9}
            onPress={() => {
              setModalOpen(false);
            }}>
            <View style={styles.mdtop}>
              <Image
                style={{
                  width: 80,
                  height: 80,
                  alignSelf: 'center',
                  marginTop: 40,
                }}
                source={require('../images/checked.png')}
              />
              <Text style={styles.modalText}>
                Password Updated{`\n`}Successfully!!
              </Text>

              <Text style={styles.modalSubText}>
                Your password has been changed{`\n`}successfully. Use your new
                password{`\n`}to log in.
              </Text>
              <View
                style={{
                  width: '45%',
                  marginTop: 20,
                  alignSelf: 'center',
                }}>
                <StartButton
                  title={'Next'}
                  onPress={() => {
                    //   navigation.navigate('TabNavigator');
                  }}
                />
              </View>
              <BottomView />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Modaal;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'AvenirLTStd-Heavy',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#1E1F20',
    marginHorizontal: 30,
  },
  subtext: {
    fontFamily: 'AvenirLTStd-Medium',
    fontSize: 18,
    fontWeight: '500',
    color: '#8F92A1',
    marginHorizontal: 30,
    lineHeight: 25,
    marginTop: 5,
  },
  middleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tfStyle: {
    width: '85%',
    marginHorizontal: 30,
  },
  touch: {
    padding: 10,
    marginHorizontal: 30,
    borderRadius: 5,
    backgroundColor: '#0253B3',
    marginTop: 40,
    elevation: 15,
  },
  touchtext: {
    fontFamily: 'AvenirLTStd-Medium',
    fontSize: 22,
    fontWeight: '500',
    alignSelf: 'center',
    color: '#ffffff',
  },
  modal_View: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  mdtop: {
    backgroundColor: '#FFFFFF',
    marginTop: height / 3,
    marginHorizontal: 20,
    borderRadius: 30,
  },
  modalText: {
    fontFamily: 'Avenir-Heavy',
    fontWeight: '900',
    fontSize: 20,
    color: '#1E2432',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 30,
  },
  modalSubText: {
    fontFamily: 'Rubik-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: '#838383',
    textAlign: 'center',
    marginTop: 10,
  },
  modalRate: {
    fontFamily: 'Rubik-SemiBold',
    fontWeight: '600',
    fontSize: 36,
    color: '#060417',
    textAlign: 'center',
    marginTop: 10,
  },
});
