import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity, Image } from 'react-native'
import default_style from "./style.js"
import { Avatar } from 'react-native-paper';
import logics from "../commonLogic"
import Icon from 'react-native-vector-icons/Fontisto';

export default class Menu extends Component {


    state = {
        styles: {
            favicon: null
        }
    }

    email="brguru90@gmail.com"
    descriptions="some string"
    city="Banglore, KARNATAKA"



    render() {
        const styles = logics.updateStyle(default_style, this.state.styles)

        return (
            <View style={styles.menu}>

                <View style={styles.banner}>
                    {this.state.favicon ? <Avatar.Image size={104} style={styles.avatar} source={this.state.favicon} /> : <Avatar.Image size={104} style={styles.avatar} />}
                   
                    <View style={styles.avatar_descriptions}>
                        <Icon
                            name="email" style={styles.desc_icon}
                        /> 
                        <Text style={styles.desc} >{this.email}</Text>
                    </View>
                    <View style={styles.avatar_descriptions}>
                        <Icon
                            name="email" style={styles.desc_icon}
                        /> 
                        <Text style={styles.desc} >{this.city}</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.menuBtn} onPress={() => {
                    this.props.hide_menu()
                    this.props.navigation.navigate('Home')
                }}>
                    <Text style={styles.menuBtnText} > Home </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBtn} onPress={() => {
                    this.props.hide_menu()
                    this.props.navigation.navigate('Screen2')
                }}>
                    <Text style={styles.menuBtnText} > Screen2 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuBtn} onPress={() => {
                    this.props.hide_menu()
                    this.props.navigation.navigate('Home')
                }}>
                    <Text style={styles.menuBtnText} > Home </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBtn} onPress={() => {
                    this.props.hide_menu()
                    this.props.navigation.navigate('Screen2')
                }}>
                    <Text style={styles.menuBtnText} > Screen2 </Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.menuBtn} onPress={() => {
                    this.props.hide_menu()
                    this.props.navigation.navigate('Home')
                }}>
                    <Text style={styles.menuBtnText} > Home </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBtn} onPress={() => {
                    this.props.hide_menu()
                    this.props.navigation.navigate('Screen2')
                }}>
                    <Text style={styles.menuBtnText} > Screen2 </Text>
                </TouchableOpacity>
            </View>
        )
    }
}