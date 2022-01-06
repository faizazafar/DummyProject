import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const Usestate = () => {
  const [inputValue, setInputValue] = useState('Faiza');

  let handleChange = event => {
    // const newValue = event.target.value
    // setInputValue(newValue)
    // console.log(inputValue)
    // const value = JSON.stringify(event)
    console.log(JSON.stringify(event));
  };
  return (
    <View>
      <TextInput
        placeholder="enter something"
        onChangeText={handleChange}></TextInput>
      {/* <TextInput placeholder="enter something" onChangeText={text=>setInputValue(text)}></TextInput> */}
      <Text>{inputValue}</Text>
    </View>
  );
};

export default Usestate;
