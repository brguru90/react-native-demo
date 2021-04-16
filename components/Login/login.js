import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Button, TextInput as ReactTextInput, TouchableNativeFeedback, TouchableHighlight } from "react-native"
import default_style from "./style.js"
import logics from "../commonLogic"
import { TextInput, TextInputMask } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';



export default ({ navigation }) => {

    const [style, setStyle] = useState({})

    // useEffect(() => {

    //     const styles = logics.updateStyle(default_style, style)
    // }, [style])

    const styles = logics.updateStyle(default_style, style)

    const [text, setText] = React.useState('');


    console.log(styles)


    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} translucent={false} backgroundColor="white" />
            <View style={logics.styles(styles.blk, styles.mgh_md, styles.flexv_hctr)}>
                <View style={styles.login_text}>
                    <Icon name="login" style={styles.login_icon} />
                    <Text style={styles.text}>
                        Login
                    </Text>
                </View>
                <View>
                    <View style={logics.styles(styles.mgv_md, styles.textInputWrap)}>
                        <TextInput
                            style={styles.textInput}
                            label="Email"
                            value={text}
                            onChangeText={text => setText(text)}
                        />
                    </View>
                    <View style={logics.styles(styles.mgv_md, styles.textInputWrap)}>
                        <TextInput
                            style={styles.textInput}
                            label="Password"
                            secureTextEntry
                            onChangeText={text => setText(text)}
                        />
                    </View>

                    <View style={logics.styles(styles.mgv_lg, styles.textInputWrap)}>
                        {/* <Button
                            style={{height:100}}
                            onPress={() => navigation.navigate('Home')}
                            title="Login"
                            height={100}
                        /> */}
                        <TouchableHighlight
                            style={{ alignItems: 'center' }}
                            underlayColor="white"
                            onPress={() => navigation.navigate('Home')}
                        >
                            <Text style={styles.loginBtn}>Login</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </View>
    )
}
