import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Login2 = ({setUsername , user}) => {
    return (
        
        <View>
           <TextInput
           onChange={(event)=>{
               setUsername(event.target.value)
           }}>
            
            

           </TextInput>
        </View>
    )
}

export default Login2

const styles = StyleSheet.create({})
