import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const User = ({username}) => {

    return (
        <View>
            <Text>User: {username}</Text>
        </View>
    )
}

export default User

const styles = StyleSheet.create({})
