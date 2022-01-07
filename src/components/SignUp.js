import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Yup from 'yup';
import {Formik} from 'formik';

export default function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const [showText, setShowText] = useState(true);

  //   const handleSubmitPress = () => {
  //     if (!email) {
  //       alert('Please enter user');
  //       return;
  //     }
  //     if (!pass) {
  //       alert('Please fill Password');
  //       return;
  //     } else {
  //       console.info(email, pass);
  //     }
  //   };

  console.log(email);
  console.log(pass);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={values => {
        Alert.alert(JSON.stringify(values));
        console.log('hello');
        console.log(values.name);
        console.log(values.email);
        setEmail(values.name);
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Please, provide your name!'),
        email: Yup.string().email().required(),
        password: Yup.string()
          .min(4)
          .max(10, 'Password should not excced 10 chars.')
          .required(),
      })}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <View style={styles.container}>
          <Text style={styles.text1}>SIGN UP </Text>

          <View style={styles.Loginform}>
            <Feather
              style={{flex: 0.1}}
              name={'user'}
              size={20}
              color="#62757f"
            />
            <View  style={{flex: 0.9}}>
            <TextInput 
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              placeholder="Enter Name"></TextInput>
            {touched.name && errors.name && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>
                {errors.name}
              </Text>
            )}
            </View>
          </View>
          <View style={styles.Loginform}>
            <Feather
              style={{flex: 0.1}}
              name={'user'}
              size={20}
              color="#62757f"
            />
            <View  style={{flex: 0.9}}>
            <TextInput
              placeholder="EMAIL"
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}></TextInput>
            {touched.email && errors.email && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>
                {errors.email}
              </Text>
            )}
            </View>
          </View>
          <View style={styles.Loginform}>
            <Feather
              style={{flex: 0.1 , width:"100%"
            }}
              name={'lock'}
              size={20}
              color="#62757f"
            />
            <View style={{flex: 0.8, width: '100%'}}>

            <TextInput 
              placeholder={' Create Password'}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={showText}></TextInput>

            {touched.password && errors.password && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>
                {errors.password}
              </Text>
            )}
            </View>

            <Feather
              style={{flex: 0.1,  width:"100%"}}
              size={20}
              color="#62757f"
              name={showText ? 'eye-off' : 'eye'}
              onPress={() => setShowText(!showText)}
            />
          </View>

          <TouchableOpacity
            style={{
              padding: 20,
              backgroundColor: 'black',
              alignItems: 'center',
              width: 200,
              borderRadius: 30,
              marginTop: 20,
            }}
            disabled={!isValid}
            onPress={handleSubmit}>
            <Text style={{color: 'white', fontWeight: '600'}}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    width:"100%"
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
    width:"100%",
    // backgroundColor:"lightblue"
  },
});
