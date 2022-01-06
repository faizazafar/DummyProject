import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NEWJSON = () => {
    const student  = {
        name:'John',
        age:22,
        isActive : true
    }

    console.log(typeof student)
    const value = JSON.stringify(student)
    console.log(typeof value)
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default NEWJSON

const styles = StyleSheet.create({})
