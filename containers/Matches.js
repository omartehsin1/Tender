import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet, AsyncStorage, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../assets/styles';


// const Item = ({ title, subtitle, image, navTo }) => (
//   <View style={styles.item}>
//     <TouchableOpacity onPress={navTo}>
//       <Image style={styles.image} source={image}/>
//       <View style={{alignItems: "center", flex: 1}}>
//         <Text style={styles.title}>{title}</Text>
//         <Text style={styles.subtitle}>{subtitle}</Text>
//       </View>
//     </TouchableOpacity>
//   </View>
// );

const Matches = ({navigation}) => {
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
  const goToDetailScreen = () => {
     navigation.push('DetailsScreen', {theItem})
  }
  // const renderItem = ({ item }) => (
  //   <Item title={item.name} subtitle={item.description} image={item.image} navTo={goToDetailScreen}/>
  // );


  fetchAllItems().then(response => setTheItem(response))
    return (

      <SafeAreaView style={matchesStyles.container}>
        <FlatList 
          data={theItem}
          renderItem={({ item }) => (
          <View style={matchesStyles.item}>
            <TouchableOpacity onPress={() => navigation.push('DetailsScreen', item)}>
              <Image style={matchesStyles.image} source={item.image}/>
              <View style={{alignItems: "center", flex: 1}}>
                <Text style={matchesStyles.title}>{item.name}</Text>
                <Text style={matchesStyles.subtitle}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          </View> 
          )}
          keyExtractor={item => item.id} />
      </SafeAreaView>

    );
}

const matchesStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60
  },
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

export default Matches;