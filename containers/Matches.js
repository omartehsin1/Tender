import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet, AsyncStorage, FlatList, Dimensions} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemLayout from './ItemLayout';
import {snapPoint, timing, useClock, usePanGestureHandler, useValue} from  "react-native-redash/lib/module/v1";
import Animated, { add, clockRunning, cond, eq, max, min, not, set, useCode, call} from 'react-native-reanimated';

const { width }= Dimensions.get("window");
const snapPoints = [-width, -100, 0];
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

  fetchAllItems().then(response => setTheItem(response))
    return (

      <SafeAreaView style={matchesStyles.container}>
        <FlatList 
          data={theItem}
          renderItem={({ item }) => (
              <Item onSwipe={() => {
                const newItems = [...theItem];
                newItems.splice(newItems.indexOf(item), 1);
                setTheItem(newItems);
              }} items={item}/>
          )}
          keyExtractor={item => item.id} />
      </SafeAreaView>

    );
}

const Item = (items, onSwipe) => {
   const {gestureHandler, translation, velocity, state} = usePanGestureHandler();
    const translateX = useValue(0);
    const theHeight = 64;
    const offsetX = useValue(0);
    const height = useValue(theHeight);
    const clock = useClock();
    const to = snapPoint(translateX, velocity.x, snapPoints);
    const shouldRemove = eq(to, -width);
    
    useCode(
      () => [
        cond(
          eq(state, State.ACTIVE),
          set(translateX, add(offsetX,  min(translation.x, 0)))
        ),
        cond(
          eq(state, State.END), [
          set(translateX, timing({clock, from: translateX, to })),
          set(offsetX, translateX),
          cond(shouldRemove, [
             set(height, timing({from: theHeight, to: 0})),
            cond(not(clockRunning(clock)), call([], () => void onSwipe))
          ])
        ])
      ], 
      [onSwipe] 
    );
  //  const translateX = translation.x;
  return (
    <Animated.View>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={{ height, transform: [{ translateX }]}}>
          <ItemLayout props={items}/> 
        </Animated.View> 
      </PanGestureHandler>
    </Animated.View>
    
  )
}


const matchesStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60
  }
});

export default Matches;