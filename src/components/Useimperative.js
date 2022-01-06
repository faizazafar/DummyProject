import React from 'react'
import  { useRef } from "react";
import { View, Text, Button } from 'react-native'
import Buttons from './Buttons';

export default function Useimperative() {
    const buttonRef = useRef(null);

    return (
        <View>
        <Button 
        title='Button From Parent'
        onPress={()=>{buttonRef.current.alterToggle();}}></Button>

        <Buttons ref={buttonRef}></Buttons>
        </View>
    )
}
