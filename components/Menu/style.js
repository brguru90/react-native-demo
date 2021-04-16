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
        backgroundColor: "#3937ea",
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
        flexWrap:"wrap",
        justifyContent:"flex-start",
        alignItems: 'center',
        marginLeft:20,
        marginBottom:5,
    },
    desc_icon:{
        color:"#fff",
        fontSize: 20,
        marginRight:10,
    },
    desc:{
        color:"#fff",
        fontSize: 16,
    },
    menuBtn: {
        width: "100%",
        backgroundColor: "#fff",
        paddingTop: 5,
        paddingBottom: 10,  
        paddingLeft:10,
        marginBottom:5,

        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 0.5,
        // borderColor:'#f2f2f2',
        // borderBottomWidth:1,
    },
    menuBtnText: {
        fontSize: 20,
    },
    body:{
        marginTop:40,
        flex:1,
        // borderTopWidth:1,
        // borderTopColor:"#f2f2f2",

        borderRightColor:'#dedede',
        borderRightWidth:1
    }

}