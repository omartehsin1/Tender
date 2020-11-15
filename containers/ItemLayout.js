import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const listStyles = StyleSheet.create({
    item: {
        margin:10,
        padding:10,
        backgroundColor:"#FFF",
        width:"80%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:5
      },
      title: {
        fontSize: 20,
        marginLeft: 10
      },
      subtitle: {
        fontSize: 12,
        marginLeft: 10
      },
      image: {
        width: 60,
        height: 60,
        borderRadius: 30
      }
});

function ItemLayout(props){
    return (
        <View style={listStyles.item}>
            {/* <Text style={listStyles.title}>Hello</Text> 
            <Text style={listStyles.title}>How</Text> 
            <Text style={listStyles.title}>Are</Text> 
            <Text style={listStyles.title}>You</Text>  */}
                <Image style={listStyles.image} source={props.props.items.image}/>
                <View style={{alignItems: "center", flex: 1}}>
                    <Text style={listStyles.title}>{props.props.items.name}</Text>
                    <Text style={listStyles.subtitle}>{props.props.items.description}</Text>
                </View>
        </View>
    )
}

export default ItemLayout;