import React from 'react';
import {
    StyleSheet
} from 'react-native';
import global_style from "./global_style.js"
 


export default {
    updateStyle: (default_style, cur_style) => {

        let styles = Object.assign({},global_style)
        for(let key in default_style)
            styles[key] = StyleSheet.flatten([default_style[key], cur_style[key]]);
        for(let key in cur_style){
            if(typeof(default_style[key])=="undefined"){
                styles[key] = StyleSheet.flatten([global_style[key],cur_style[key]]);
            }
        }
        return styles
    }
}