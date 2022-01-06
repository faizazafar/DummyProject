import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

export default function Useeffect() {

    const [ data , setdata ] = useState("")

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((res)=>{setdata(res.data[0].email)})
        console.log("API was called")
    },[])
    return (
        <View>
            <Text>iam effect
                {data}
            </Text>
        </View>
    )
}
