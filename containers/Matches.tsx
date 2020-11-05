import React, { useState } from 'react';
import { View, StyleSheet, Text, AsyncStorage } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Item = ({title, subtitle}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
);

const Matches = (props) => {
    const [theItem, setTheItem] = useState([]);

    const fetchAllItems = async () => {
        try {
            const result = [{}];
            const keys = await AsyncStorage.getAllKeys();

            for (const key of keys) {
                const val = await AsyncStorage.getItem(key);
                result[key] = JSON.parse(val);
            }
            return result
        } catch (error) {
            console.log(error)
        }
    }

    const renderItem = ({item}) => (
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
    )
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