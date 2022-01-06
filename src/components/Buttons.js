import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { forwardRef, useImperativeHandle, useState } from "react";

const Buttons = forwardRef((props,ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref,()=>({
        alterToggle() {
            setToggle(!toggle);
          },
    
    }));
    
    return (
        <View>
            <Button title='Button From Child'></Button>
            {toggle && <Text>Toggle </Text>}
        </View>
    )
})

export default Buttons

const styles = StyleSheet.create({})
