  
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image, 
  AsyncStorage
} from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import styles from '../assets/styles';
import CardItem from '../components/CardItem';
import Demo from '../assets/data/demo';
import MatchesScreen from './Matches'

const Home = () => {
  const test = 'This is a test';
  const matchedFood = ['pear'];
  const [result, setResult] = useState([]);
  // const addToMatchedFoodsArray = (id, food) => {
  //   return matchedFood.push([id, food]);
  // }
  // console.log("matchedFood", result);

    return (

      <View style={styles.containerHome}>
        <View style={styles.top}>
          
        </View>
        <CardStack
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={swiper => (this.swiper = swiper)}
          >
            {Demo.map((item, index) => (
              <Card key={index} 
              onSwipedRight={() => 
                //console.log("index", index.toString())
                 AsyncStorage.setItem(index.toString(), JSON.stringify(item))
                // addToMatchedFoodsArray(index, item),
                //  setResult(result => [...result, item]) 
                
                
              }
              >
                <CardItem 
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  recipe={item.recipe}
                  instructions={item.instructions}
                  actions
                  onPressLeft={() => this.swiper.swipeLeft()}
                  onPressRight={() => this.swiper.swipeRight()}
                  />
              </Card>
            ))}
          </CardStack>
      </View>
    );
    
}


export default Home;