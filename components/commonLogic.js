import React from 'react';
import {
    StyleSheet
} from 'react-native';


export default {
    updateStyle: (default_style, cur_style) => {
        let styles = {}
        for (let key in default_style)
            styles[key] = StyleSheet.flatten([default_style[key], cur_style[key]]);
        return styles
    }
}