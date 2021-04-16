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
        fontSize: 30,
        height:65,
        alignSelf: "center",
        backgroundColor:"#348feb",
        color:"#fff",
        textAlign:"center",
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:30,
        paddingRight:30,
        borderRadius:5,

        borderBottomColor: "#0a437d",
        borderBottomWidth: 4,
        borderRightColor: "#0a437d",
        borderRightWidth: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0,
        shadowRadius: 3.84,
        elevation: 10,
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