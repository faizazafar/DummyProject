import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { useEffect , useLayoutEffect, useRef} from 'react'
// import { useRef } from 'react/cjs/react.development'

// uselayout effect is rendered before useeffect it is mostly ui based 
// whenever i want to show user something first before effecting useffect

export default function UseLayout() {
    const inputRef = useRef(null)
    useLayoutEffect(() => {
        // console.log("UseLayoutEffect")
        console.log(inputRef.current.value)
    }, [])

    useEffect(()=>{

        // console.log("Useeffect")
        inputRef.current.value="HELLO"

    }, [])
    return (
        <View>
            <TextInput ref={inputRef} value='PEDRO' style={{width:50 , height:50}}></TextInput>
        </View>
    )
}
