import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Button } from "react-native"
import default_style from "./style.js"
import logics from "../commonLogic"
import { TextInput } from 'react-native-paper';



export default ({ navigation }) => {

    const [style, setStyle] = useState({})

    // useEffect(() => {

    //     const styles = logics.updateStyle(default_style, style)
    // }, [style])

    const styles = logics.updateStyle(default_style, style)

    const [text, setText] = React.useState('');



    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} translucent={false} backgroundColor="white" />
            <View style={styles.blk}>
                <Text style={styles.text}>Login screen</Text>
                <Button
                    style={styles.loginBtn}
                    onPress={() => navigation.navigate('Home')}
                    title="Login"
                />

                <View style={styles.mg_md}>
                    <TextInput
                        style={styles.textInput}
                        label="Email"
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                </View>
            </View>
        </View>
    )
}
