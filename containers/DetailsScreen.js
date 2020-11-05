import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../assets/styles';

export default function DetailsScreen({ route }) {
  let data = route.params;
    return (
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "space-between",  flexDirection: "column"}}>
          <View>
            <View style={{alignItems: "center"}}>
              <Image style={detailStyles.image} source={data.image}/>
            </View>
            
            <Text style={detailStyles.nameStyle}>{data.name}</Text>
            <View>
              <Text>Ingredients</Text>
              <Text>{data.recipe}</Text>
            </View>

            <View>
              <Text>Instructions</Text>
              <Text>{data.instructions}</Text>
            </View> 
          </View>
        </View>
        </ScrollView>
      );
}

const detailStyles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
    marginTop: 10
  },
  nameStyle:{
    paddingTop: 15,
    paddingBottom: 7,
    color: '#363636',
    fontSize: 30
  }
})