import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {Picker} from '@react-native-picker/picker';

import SelectDropdown from 'react-native-select-dropdown';

// let data = [{value: 'Pakistan'}, {value: 'India'}, {value: 'Saudi'}];
const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

// const {width, height} = Dimensions.get('screen');

const Profile = () => {
  //   const [showText, setShowText] = useState(true);
  const [showText, setShowText] = useState({
    textone: false,
    texttwo: false,
    textthree: false,
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.title}>
          <Text style={styles.text}>Register account</Text>
        </View>

        <View style={{alignSelf: 'center'}}>
          <View style={styles.profileimage}>
            <Image
              resizeMode="center"
              style={styles.image}
              source={require('../assets/pro.png')}></Image>
          </View>
          <View style={styles.cam}>
            <TouchableOpacity>
              <Ant name={'camera'} size={22} color="#246FFF" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.form}>
          <TextInput
            style={{flex: 0.8, paddingLeft: 10}}
            placeholder="Company Name "
            placeholderTextColor={'black'}></TextInput>
        </View>
        <View style={styles.form}>
          <TextInput
            style={{flex: 0.8, paddingLeft: 10}}
            placeholder="Email "
            placeholderTextColor={'black'}></TextInput>
        </View>

        <View style={styles.form}>
          <View style={{flex: 0.7}}>
            <TextInput
              style={{paddingLeft: 10}}
              placeholder="Mobile Number "
              placeholderTextColor={'black'}
              secureTextEntry={showText.textthree}></TextInput>
          </View>
          <Feather
            style={{flex: 0.1, width: '100%'}}
            size={20}
            color="#62757f"
            name={showText.textthree ? 'eye-off' : 'eye'}
            onPress={() =>
              setShowText({...showText, textthree: !showText.textthree})
            }
          />
        </View>

        <View style={styles.form}>
          <View style={{flex: 0.7}}>
            <TextInput
              style={{paddingLeft: 10}}
              placeholder="Password"
              placeholderTextColor={'black'}
              secureTextEntry={showText.textone}></TextInput>
          </View>

          <Feather
            style={{flex: 0.1, width: '100%'}}
            size={20}
            color="#62757f"
            name={showText.textone ? 'eye-off' : 'eye'}
            onPress={() =>
              setShowText({...showText, textone: !showText.textone})
            }
          />
        </View>

        <View style={styles.form}>
          <View style={{flex: 0.7}}>
            <TextInput
              style={{paddingLeft: 10}}
              placeholder="Confirm Password"
              placeholderTextColor={'black'}
              secureTextEntry={showText.texttwo}></TextInput>
          </View>

          <Feather
            style={{flex: 0.1, width: '100%'}}
            size={20}
            color="#62757f"
            name={showText.texttwo ? 'eye-off' : 'eye'}
            onPress={() =>
              setShowText({...showText, texttwo: !showText.texttwo})
            }
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            marginVertical: 10
          }}>
          <TouchableOpacity style={{ backgroundColor:"#246FFF" , padding: 20 , width: 320
        , borderRadius: 4}}>
            <Text style={{ color: "white" , alignItems:"center" , alignSelf:"center"}}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    alignItems: 'center',
    alignSelf: 'center',
  },

  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  title: {
    marginTop: 30,
  },
  cam: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },

  profileimage: {
    width: 90,
    height: 90,
    overflow: 'hidden',
    borderRadius: 100,
    marginVertical: 20,
  },
  form: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#246FFF',
    marginVertical: 10,
    borderRadius: 5,
  },
  scroll: {
    width: '100%',
  },
});
