import React,{useState} from 'react'
import { View, Text,StatusBar} from "react-native"
import default_style from "./style.js"
import logics from "../commonLogic"
import menu from "../Menu/menu";
import Sidebar from "../sideBar/side_bar";


export default ({navigation}) => {

    const [style, setStyle] = useState({})

    const styles = logics.updateStyle(default_style, style)

    return (
        <Sidebar menu={menu} navigation={navigation}>
            <StatusBar barStyle="dark-content" hidden={false} translucent={false} backgroundColor="nlue" />
            <View style={styles.container}>
                <Text>Screen2</Text>
            </View>
        </Sidebar>
    )
}
