import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems:'flex-start',

    },
    header:{
        width: "100%",
        paddingTop:80,
        alignItems: 'center',
        justifyContent:'center'

    },
    Logo:{
        alignItems:"center",
        width:200,
        height:60

    },
    categoria:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop: 30
    },

    corText:{
        fontSize: 14,
        fontWeight: "500",
        color:"#FFF"
    },
    btnImage:{
        width:"100%",
        alignItems:"center"
    },
    imgOp:{
        alignItems:"center",
        width:"100%",
        height:100,
        backgroundColor:"#fff"
    },
    titAssis:{
        alignItems:"flex-start",
        fontSize: 18,
        marginTop:10,
        color:"#FFF"
    },
    btnImageAssis:{
        width:"100%",
        alignItems:"flex-start"
    },
    imgAssis:{
        alignItems:"flex-start",
        width:"35%",
        backgroundColor:"#fff"
    },
    
    
    filmescont:{
        width:200,
        height:100
    },
    continue:{
        width:"100%"
    },
    containerAcao:{
        width:"100%"
    },
    acao:{
        width:300,
        height:100
    },

})