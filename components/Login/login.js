import React,{useState} from 'react'
import { View, Text,StatusBar} from "react-native"
import default_style from "./style.js"
import logics from "../commonLogic"


export default () => {

    const [state, setState] = useState({
        styles:{

        }
    })

    const styles = logics.updateStyle(default_style, state.styles)

    return (
        <View>
            <StatusBar barStyle="dark-content" hidden={false} translucent={false} backgroundColor="red" />
            <View style={styles.content}>
                <Text>Login screen</Text>
            </View>
        </View>
    )
}
