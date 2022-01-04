import React from 'react'
import { View, StyleSheet,TextInput, Text, ScrollView , StatusBar} from 'react-native'
import Login from './src/components/Login'

export default function New() {
    return (
        <View style={styles.container}>
                  <StatusBar
        backgroundColor="#000063"
        barStyle="light-content"
      />

        <Login></Login>
        </View>
    )
}

const styles = StyleSheet.create({

    container :{
        backgroundColor:"#BB86FC",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})