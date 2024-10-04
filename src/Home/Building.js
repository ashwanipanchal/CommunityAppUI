import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ButtonStyle, HeaderDark} from '../Custom/CustomView';
import StepIndicator from 'react-native-step-indicator';
import {RadioButton} from 'react-native-paper';
import Loader from '../Custom/Loader';
import {useNavigation} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import {
  GetAge,
  GetApartment,
  GetBhk,
  GetBuilding,
  GetCity,
  GetFacing,
  GetFloor,
  GetProperty,
  LocalStorage,
  Verifyotp,
} from '../../backend/Api';

const labels = ['', '', '', '', ''];

const EditBuilding = data => {
  // alert(JSON.stringify(data, null, 2));
  const navigation = useNavigation();
  const [checked, setChecked] = useState(1);
  const [modes, setModes] = useState(['Landlord', 'Builder']);
  const [property, setProperty] = useState('2');
  const [city, setCity] = useState([]);
  const [typeProperty, setTypeproperty] = useState([]);
  const [typeBuilding, setTypeBuilding] = useState([]);
  const [typeBhk, setTypeBhk] = useState([]);
  const [facing, setFacing] = useState([]);
  const [age, setAge] = useState([]);
  const [floor, setFloor] = useState([]);
  const [apartment, setApartment] = useState([]);
  const [selectedcity, setSelectedCity] = useState('');
  const [cityName, setCityName] = useState('');
  const [name, setname] = useState('');
  const [propertysize, setpropertysize] = useState('');
  const [selectedproperty, setSelectedproperty] = useState('');
  const [selectedfacing, setSelectedfacing] = useState('');
  const [selectedage, setSelectedage] = useState('');
  const [selectedfloor, setSelectedfloor] = useState('');
  const [selectedapartment, setSelectedapartment] = useState('');
  const [selectedbhk, setSelectedbhk] = useState('');
  const [apartmentno, setApartmentno] = useState('');
  const [description, setDescription] = useState('');
  const [selectedbuilding, setSelectedbuilding] = useState('');
  const value = ['Delhi', 'New Delhi'];
  const [state, setState] = useState({
    term: false,
    currentPosition: 0,
    isLoading: false,
  });

  const toggleLoader = isLoading => setState({...state, isLoading});

  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: 'red',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#07A64B',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#07A64B',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#07A64B',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: 'red',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fff',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#333333',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#333333',
  };

  useEffect(() => {
    GetCity()
      .then(data => {
        // alert(JSON.stringify(data));
        if (data.status) {
          // alert(JSON.stringify(data, null, 2));
          setCity(data.data);
        } else {
          // alertMessage('LabourHome', data.message);
          // navigation.navigate('Otp',{otp:+data.otp,status:false,mobile:+mobile})
        }
      })
      .catch(error => {
        console.log('error', error);
      });
    GetProperty()
      .then(data => {
        // alert(JSON.stringify(data));
        if (data.status) {
          // alert(JSON.stringify(data, null, 2));
          setTypeproperty(data.data);
        } else {
          // alertMessage('LabourHome', data.message);
          // navigation.navigate('Otp',{otp:+data.otp,status:false,mobile:+mobile})
        }
      })
      .catch(error => {
        console.log('error', error);
      });
    GetBuilding()
      .then(data => {
        // alert(JSON.stringify(data));
        if (data.status) {
          // alert(JSON.stringify(data, null, 2));
          setTypeBuilding(data.data);
        } else {
          // alertMessage('LabourHome', data.message);
          // navigation.navigate('Otp',{otp:+data.otp,status:false,mobile:+mobile})
        }
      })
      .catch(error => {
        console.log('error', error);
      });
    GetBhk()
      .then(data => {
        // alert(JSON.stringify(data));
        if (data.status) {
          // alert(JSON.stringify(data, null, 2));
          setTypeBhk(data.data);
        } else {
          // alertMessage('LabourHome', data.message);
          // navigation.navigate('Otp',{otp:+data.otp,status:false,mobile:+mobile})
        }
      })
      .catch(error => {
        console.log('error', error);
      });
    GetFacing()
      .then(data => {
        // alert(JSON.stringify(data));
        if (data.status) {
          // alert(JSON.stringify(data, null, 2));
          setFacing(data.data);
        } else {
          // alertMessage('LabourHome', data.message);
          // navigation.navigate('Otp',{otp:+data.otp,status:false,mobile:+mobile})
        }
      })
      .catch(error => {
        console.log('error', error);
      });
    GetAge()
      .then(data => {
        // alert(JSON.stringify(data));
        if (data.status) {
          // alert(JSON.stringify(data, null, 2));
          setAge(data.data);
        } else {
          // alertMessage('LabourHome', data.message);
          // navigation.navigate('Otp',{otp:+data.otp,status:false,mobile:+mobile})
        }
      })
      .catch(error => {
        console.log('error', error);
      });
    GetFloor()
      .then(data => {
        // alert(JSON.stringify(data));
        if (data.status) {
          // alert(JSON.stringify(data, null, 2));
          setFloor(data.data);
        } else {
          // alertMessage('LabourHome', data.message);
          // navigation.navigate('Otp',{otp:+data.otp,status:false,mobile:+mobile})
        }
      })
      .catch(error => {
        console.log('error', error);
      });
    GetApartment()
      .then(data => {
        // alert(JSON.stringify(data));
        if (data.status) {
          // alert(JSON.stringify(data, null, 2));
          setApartment(data.data);
        } else {
          // alertMessage('LabourHome', data.message);
          // navigation.navigate('Otp',{otp:+data.otp,status:false,mobile:+mobile})
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Loader status={state.isLoading} />
      <TextLabel title={'Select City'} />
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={cityName}
          placeholder={''}
          placeholderTextColor="#858597"
          keyboardType={
            Platform.OS == 'ios' ? 'ascii-capable' : 'visible-password'
          }
          onChangeText={text => setCityName(text)}
          // onChangeText={text =>
          //   setState({
          //     ...state,
          //     name: text.replace(
          //       /[`~!£#₹$%^&*✓™®©%€¥$¢^∆¶×÷π√•°()|+\=?;:'",<>\{\}\[\]\\\/]/gi,
          //       '',
          //     ),
          //   })
          // }
        />
      </View>

      <TextLabel title={'Apartment / Building Name'} />
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={name}
          placeholder={''}
          placeholderTextColor="#858597"
          keyboardType={
            Platform.OS == 'ios' ? 'ascii-capable' : 'visible-password'
          }
          onChangeText={text => setname(text)}
          // onChangeText={text =>
          //   setState({
          //     ...state,
          //     name: text.replace(
          //       /[`~!£#₹$%^&*✓™®©%€¥$¢^∆¶×÷π√•°()|+\=?;:'",<>\{\}\[\]\\\/]/gi,
          //       '',
          //     ),
          //   })
          // }
        />
      </View>

      <TextLabel title={'Property Type'} />
      <View style={styles.container}>
        <SelectDropdown
          data={typeProperty}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setSelectedproperty(selectedItem.name);
            // setCategoryID(selectedItem.id);
            //    navigation.navigate('ConstractorSelectCategory');
          }}
          defaultButtonText={'Select an type'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.name;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return (
              <Image
                style={{width: 12, height: 12, resizeMode: 'contain'}}
                source={require('../images/arrow2.png')}
              />
            );
          }}
          dropdownIconPosition={'right'}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          rowTextForSelection={(item, index) => {
            return item.name;
          }}
        />
      </View>
      <TextLabel title={'Building Type'} />
      <View style={styles.container}>
        <SelectDropdown
          data={typeBuilding}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setSelectedbuilding(selectedItem.id);
            // setCategoryID(selectedItem.id);
            //    navigation.navigate('ConstractorSelectCategory');
          }}
          defaultButtonText={'Select an type'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.name;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return (
              <Image
                style={{width: 12, height: 12, resizeMode: 'contain'}}
                source={require('../images/arrow2.png')}
              />
            );
          }}
          dropdownIconPosition={'right'}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          rowTextForSelection={(item, index) => {
            return item.name;
          }}
        />
      </View>
      <TextLabel title={'BHK Type'} />
      <View style={styles.container}>
        <SelectDropdown
          data={typeBhk}
          value={selectedbhk}
          defaultValue={selectedbhk}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setSelectedbhk(selectedItem.name);
            // setCategoryID(selectedItem.id);
            //    navigation.navigate('ConstractorSelectCategory');
          }}
          defaultButtonText={'Select an type'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.name;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return (
              <Image
                style={{width: 12, height: 12, resizeMode: 'contain'}}
                source={require('../images/arrow2.png')}
              />
            );
          }}
          dropdownIconPosition={'right'}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          rowTextForSelection={(item, index) => {
            return item.name;
          }}
        />
      </View>
      <TextLabel title={'Floors'} />
      <View style={styles.container}>
        <SelectDropdown
          data={floor}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setSelectedfloor(selectedItem.name);
            // setCategoryID(selectedItem.id);
            //    navigation.navigate('ConstractorSelectCategory');
          }}
          defaultButtonText={'Select an type'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.name;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return (
              <Image
                style={{width: 12, height: 12, resizeMode: 'contain'}}
                source={require('../images/arrow2.png')}
              />
            );
          }}
          dropdownIconPosition={'right'}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          rowTextForSelection={(item, index) => {
            return item.name;
          }}
        />
      </View>
      <TextLabel title={'Apartment No.'} />
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={apartmentno}
          placeholder={''}
          placeholderTextColor="#858597"
          keyboardType={
            Platform.OS == 'ios' ? 'ascii-capable' : 'visible-password'
          }
          onChangeText={text => setApartmentno(text)}
          // onChangeText={text =>
          //   setState({
          //     ...state,
          //     name: text.replace(
          //       /[`~!£#₹$%^&*✓™®©%€¥$¢^∆¶×÷π√•°()|+\=?;:'",<>\{\}\[\]\\\/]/gi,
          //       '',
          //     ),
          //   })
          // }
        />
      </View>
      <TextLabel title={'Built Up Area'} />
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          // value={state.name}
          placeholder={''}
          placeholderTextColor="#858597"
          keyboardType={
            Platform.OS == 'ios' ? 'ascii-capable' : 'visible-password'
          }
          onChangeText={text => setpropertysize(text)}
          // onChangeText={text =>
          //   setState({
          //     ...state,
          //     name: text.replace(
          //       /[`~!£#₹$%^&*✓™®©%€¥$¢^∆¶×÷π√•°()|+\=?;:'",<>\{\}\[\]\\\/]/gi,
          //       '',
          //     ),
          //   })
          // }
        />
      </View>
      <TextLabel title={'Age of Property'} />
      <View style={styles.container}>
        <SelectDropdown
          data={age}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setSelectedage(selectedItem.name);
            // setCategoryID(selectedItem.id);
            //    navigation.navigate('ConstractorSelectCategory');
          }}
          defaultButtonText={'Select an type'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.name;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return (
              <Image
                style={{width: 12, height: 12, resizeMode: 'contain'}}
                source={require('../images/arrow2.png')}
              />
            );
          }}
          dropdownIconPosition={'right'}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          rowTextForSelection={(item, index) => {
            return item.name;
          }}
        />
      </View>

      <TextLabel title={'Property Description'} />
      <TextInput
        style={styles.textInput2}
        // value={about}
        onChangeText={text => setDescription(text)}
        placeholder={''}
        multiline
        textAlignVertical="top"
        placeholderTextColor="#858597"
        keyboardType={
          Platform.OS == 'ios' ? 'ascii-capable' : 'visible-password'
        }
      />

      <View
        style={{
          width: '100%',
          alignSelf: 'center',
          marginTop: 40,
          // position: 'absolute',
          bottom: 20,
        }}>
        <ButtonStyle
          title={'Save & Next'}
          onPress={async () => {
            if (cityName == '') {
              alert('Please enter City name');
              return;
            }
            if (name == '') {
              alert('Please enter apartment name');
              return;
            }
            if (selectedproperty == '') {
              alert('Please select property');
              return;
            }
            if (selectedbuilding == '') {
              alert('Please Select building');
              return;
            }
            if (selectedbhk == '') {
              alert('Please Select bhk');
              return;
            }
            if (selectedfloor == '') {
              alert('Please Select floor');
              return;
            }
            if (apartmentno == '') {
              alert('Please enter apartment no.');
              return;
            }
            if (propertysize == '') {
              alert('Please enter built up area');
              return;
            }

            if (selectedage == '') {
              alert('Please select age');
              return;
            }
            if (description == '') {
              alert('Please enter description');
              return;
            }

            const id = (await LocalStorage.getUserId()) || '';
            // alert(JSON.stringify(id, null, 2));
            // return;
            // toggleLoader(true);
            let url = '';

            url = 'https://somalease.com/admin/api/post_properties_step1';

            let formdata = new FormData();
            formdata.append('user_id', id);
            formdata.append('post_property', property);
            formdata.append('city', cityName);
            formdata.append('apartment_name', name);
            formdata.append('property_type', selectedproperty);
            formdata.append('building_type_id', selectedbuilding),
              formdata.append('bhk_type', selectedbhk),
              formdata.append('built_up_area', propertysize),
              formdata.append('apartment_no', apartmentno);
            formdata.append('facing', selectedfacing),
              formdata.append('propert_age', selectedage);
            formdata.append('floor', selectedfloor);
            formdata.append('description', description);

            // console.log(JSON.stringify(data));
            // alert(JSON.stringify(formdata, null, 2));
            // return;

            fetch(url, {
              method: 'Post',
              headers: {
                accept: 'application/json',
                'Content-Type': 'multipart/form-data',
              },
              body: formdata,
            })
              .then(response => response.json())
              .then(responseJson => {
                // alert(JSON.stringify(responseJson, null, 2));
                // return;
                toggleLoader(false);
                if (responseJson.status == true) {
                  // alert('Thankyou for Registering With us');
                  navigation.navigate('PostNewCategory1', {responseJson});
                  // navigation.navigate('ConstractorOtp1', mobile);
                } else {
                  alert(responseJson.msg);
                }
              });

            //   navigation.navigate('ConstractorOtp1');
          }}
        />
      </View>
    </View>
  );
};

export default EditBuilding;
const TextLabel = ({title}) => <Text style={styles.textLabel}>{title}</Text>;
const TextLabel1 = ({title}) => <Text style={styles.textLabel1}>{title}</Text>;
const styles = StyleSheet.create({
  textLabel: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 14,
    color: '#858597',
    marginLeft: 25,
    marginTop: 25,
    bottom: 5,
  },
  textInput: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    fontFamily: '500',
    color: '#858597',
    width: '90%',
  },
  textInput2: {
    fontSize: 16,
    fontFamily: 'AvenirLTStd-Medium',
    borderRadius: 10,
    borderColor: '#00000020',
    borderWidth: 1.5,
    marginTop: 10,
    lineHeight: 20,
    height: 150,
    marginHorizontal: 18,
    paddingHorizontal: 15,
    paddingVertical: 11,
    color: '#333333',
  },
  textLabel1: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: 14,
    color: '#858597',
    // marginLeft: 25,
    marginTop: 25,
    bottom: 5,
  },
  container: {
    borderRadius: 10,
    borderWidth: 0.5,
    paddingHorizontal: 15,
    marginHorizontal: 25,
    marginTop: 15,
    borderColor: '#B8B8D2',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
  },
  dropdown1BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    // borderBottomWidth: 0.4,
    // marginTop: 12,
    borderColor: '#3dd7bb',
  },
  dropdown1BtnTxtStyle: {
    color: '#000',
    textAlign: 'left',
    fontSize: 12,
    marginLeft: -5,
    fontFamily: 'Avenir-Medium',
    fontWeight: '500',
  },
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},

  dropdown2BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#444',
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown2DropdownStyle: {
    backgroundColor: '#444',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  dropdown3BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    paddingHorizontal: 0,
    borderWidth: 4,
    borderRadius: 8,
    borderColor: '#444',
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3BtnTxt: {
    color: '#444',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: {backgroundColor: 'slategray'},
  dropdown3RowStyle: {
    backgroundColor: 'slategray',
    borderBottomColor: '#444',
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownRowImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3RowTxt: {
    color: '#F1F1F1',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },

  dropdown4BtnStyle: {
    width: '50%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#444',
  },
});
