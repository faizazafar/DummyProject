import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const [showText, setShowText] = useState(true);

  // const handleemail =(text)=>{

  //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  //   if (reg.test(text) === false) {
  //     alert("email is incorrect")
  //   }
  //   else{

  //     setEmail(text)


  //   }


  // }

  const handleSubmitPress = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let reg2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (reg.test(email) === false) {
          alert("email is incorrect")
        }
    if(pass.length<=8)
    {
      alert("Password length should be greater than 8 ")
    }
    if(reg2.test(pass) === false)
    {
      alert("There should be one special characeter and a capital letter ")
    }
    if (!email) {
      alert('Please enter user');
      return;
    }
    if (!pass) {
      alert('Please fill Password');
      return;} 
    else {
      console.info(email, pass);
    }
  };

  console.log(email);
  console.log(pass);

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>SIGN IN </Text>

      <View style={styles.Loginform}>
        <Feather style={{flex: 0.1}} name={'user'} size={20} color="#62757f" />
        <TextInput
          style={{flex: 0.8}}
          onChangeText={text=>setEmail(text)}
          placeholder="Username"></TextInput>
      </View>
      <View style={styles.Loginform}>
        <Feather style={{flex: 0.1}} name={'lock'} size={20} color="#62757f" />

        <TextInput
          style={{flex: 0.7}}
          placeholder={'Password'}
          onChangeText={text => setPassword(text)}
          secureTextEntry={showText}></TextInput>

        <Feather
          style={{flex: 0.1}}
          size={20}
          color="#62757f"
          name={showText ? 'eye-off' : 'eye'}
          onPress={() => setShowText(!showText)}
        />
      </View>
      <View style={{flexDirection: 'row', paddingTop: 10, paddingBottom: 40}}>
        <Text style={{color: '#707070', fontWeight: '500'}}>
          Don't Have an Account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: '#7e57c2', fontWeight: 'bold'}}>
            Register Here
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: 'black',
          alignItems: 'center',
          width: 200,
          borderRadius: 30,
        }}
        onPress={handleSubmitPress}>
        <Text style={{color: 'white', fontWeight: '600'}}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },

  text1: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    paddingBottom: 40,
  },
  Loginform: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#cfd8dc',
    marginVertical: 5,
  },
});
