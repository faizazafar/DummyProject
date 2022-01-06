import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const MyTextInput = ({name , onChangeText}) => {
    return (
        <View>
            
            
            <TextInput placeholder={name} onChangeText={(text)=>onChangeText(text)} ></TextInput>
        </View>
    )
}

export default MyTextInput

const styles = StyleSheet.create({})
