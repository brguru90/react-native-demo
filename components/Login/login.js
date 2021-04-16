import React, { useState,useEffect } from 'react'
import { View, Text, StatusBar, Button } from "react-native"
import default_style from "./style.js"
import logics from "../commonLogic"


export default ({ navigation }) => {

    const [style, setStyle] = useState({})

    // useEffect(() => {
     
    //     const styles = logics.updateStyle(default_style, style)
    // }, [style])

    const styles = logics.updateStyle(default_style, style)

    return (
        <View>
            <StatusBar barStyle="dark-content" hidden={false} translucent={false} backgroundColor="red" />
            <View style={styles.container}>
                <Text  style={styles.text}>Login screen</Text>
                <Button
                    style={styles.loginBtn}
                    onPress={() => navigation.navigate('Home')}
                    title="Login"
                />
            </View>
        </View>
    )
}
