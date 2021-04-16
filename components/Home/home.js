import React,{useState} from 'react'
import { View, Text,StatusBar} from "react-native"
import default_style from "./style.js"
import logics from "../commonLogic"
import menu from "../Menu/menu";
import Sidebar from "../sideBar/side_bar";
import Icon from 'react-native-vector-icons/FontAwesome';



export default ({navigation}) => {

    const [state, setState] = useState({
        styles:{

        }
    })

    const styles = logics.updateStyle(default_style, state.styles)

    return (
        <Sidebar menu={menu} navigation={navigation}>
            <View style={styles.container}>
            </View>
        </Sidebar>
    )
}

