import React from 'react';
import {
    Animated
} from 'react-native';


export default {

    menu: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        
    },
    banner: {
        backgroundColor: "#020a61",
        minHeight: 170,
        paddingBottom:20,
        borderColor:'#000',
        borderRightWidth:1,
    },
    avatar:{
        backgroundColor:"#fff",
        marginTop:20,
        marginLeft:20,
        marginBottom:10,
        // alignSelf:"center"
    },
    avatar_descriptions:{
        color:"#fff",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems: 'center',
        marginLeft:20,
        marginBottom:5,
    },
    desc_icon:{
        color:"#fff",
        fontSize: 20
    },
    desc:{
        color:"#fff",
        fontSize: 16,
        marginLeft:10
    },
    menuBtn: {
        width: "100%",
        backgroundColor: "#fff",
        paddingTop: 5,
        paddingBottom: 10,  
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 0.5,
        borderColor:'#f2f2f2',
        borderBottomWidth:1,
        marginBottom:5,
    },
    menuBtnText: {
        fontSize: 20,
    },
    body:{
        flex:1,
        borderColor:'#dedede',
        borderRightWidth:1
    }

}