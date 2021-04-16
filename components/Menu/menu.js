import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class Menu extends Component {
    render() {
        return (
            <View>
                <Button onPress={() => this.props.navigation.navigate('Home')} title="Home" />
                <Text onPress={() => this.props.navigation.navigate('Screen2')}> Screen2 </Text>
                <Text> Menu2 </Text>
                <Text> Menu3 </Text>
                <Text> Menu4 </Text>
            </View>
        )
    }
}