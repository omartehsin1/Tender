import React, { useState } from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity, StyleSheet, AsyncStorage, Button, FlatList} from 'react-native';
import { ListItem } from 'react-native-elements';
import FlipCard from 'react-native-flip-card';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
//padding: 100


const Item = ({ title, subtitle }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);

const Matches = (props) => {
  const [isClickable, setIsClickable] = useState(false);
  const [theItem, setTheItem] = useState([]);

  const fetchAllItems = async () => {
    try {
      const result = [{}];
      const keys = await AsyncStorage.getAllKeys();
      for (const key of keys) {
        const val = await AsyncStorage.getItem(key)
        result[key] = JSON.parse(val);
      }
       return result
    } catch (error) {
      console.log(error)
    }
  }
  const renderItem = ({ item }) => (
    <Item title={item.name} subtitle={item.description}/>
  );

  fetchAllItems().then(response => setTheItem(response))
    return (

      <SafeAreaView style={styles.container}>
        <FlatList 
          data={theItem}
          renderItem={renderItem}
          keyExtractor={item => item.id} />
      </SafeAreaView>
      // <View style={styles.container}>


        
      //   {/* <Button 
      //     title="Press" 
      //     onPress={() => 
      //       //fetchAllItems().then(response => console.log(response))
      //       console.log(theItem)
      //       //fetchAllItems()
      //         //  AsyncStorage.clear()
      //       // console.log("something")
      //   } /> */}
        
      //   {/* <FlatList 
      //     data={theItem}
      //      renderItem={({ item }) => (
      //        <ListItem 
      //         title={item.name}
      //         subtitle={item.description}
      //         />
      //      )}
      //     /> */}

        



      // </View>

    );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  container: {
    flex: 1
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  subtitle: {
    fontSize: 22
  }
});

export default Matches;