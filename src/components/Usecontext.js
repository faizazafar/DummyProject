import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Login2 from './Login2'
import User from './User'

const Usecontext = () => {

    const [username , setUsername] = useState("")

    return (
        <View>
       <Login2 setUsername={setUsername} username={username}></Login2>
       <User username={username}></User>
        </View>
    )
}

export default Usecontext

const styles = StyleSheet.create({})
