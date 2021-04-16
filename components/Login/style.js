import React from 'react';
import {
    Animated
} from 'react-native';


export default {

    container: {
        flex:1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    text:{
        color:"#000",
        fontSize: 20,
        textAlign:"center",
    },
    login_text:{
        position:"relative",
        top:-80,
        flexDirection: 'row',
        flexWrap:"wrap",
        alignItems: 'center',
    },    
    login_icon:{
        fontSize: 50,
        color:"#000",
        marginRight:10
    },
    loginBtn:{
        color:"#000",
        fontSize: 40,
        height:75,
        alignSelf: "center",
        backgroundColor:"purple",
        color:"#fff",
        textAlign:"center",
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:30,
        paddingRight:30,
        borderRadius:5
    },
    textInputWrap:{
        height:64,
        width:300
    },
    textInput:{
        fontSize: 20,
    },
    blk:{
        flex:1,
    }

    
    
}