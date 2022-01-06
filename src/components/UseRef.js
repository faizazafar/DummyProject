import React, { useRef , useEffect} from 'react'
import { View, Text, TextInput, Button } from 'react-native'

// useref is used specially for accessing DOM elements

const UseRef = () => {

    const inputRef = useRef(null);

    const onClick= () => {
        
          inputRef.current.focus();
          inputRef.current.clear();
    //     const divElement = inputRef.current;
    // console.log(divElement);
        // console.log(inputRef.current.target.value)
        console.log(inputRef.current.value)
    }
    // useEffect(() => {
    //     // Logs `HTMLInputElement` 
    //     console.log(inputRef.current.value);
    //     inputRef.current.focus();
    //   }, []);
  
    

    return (
        <View>
            <TextInput placeholder='ex..' ref={inputRef}></TextInput>
            <TextInput placeholder='ex..'></TextInput>

            <Button onPress={onClick} title='Change Name'></Button>
        </View>
    )
}

export default UseRef
