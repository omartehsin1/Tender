  
import React, { useState, useEffect } from 'react';
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
  const [result, setResult] = useState(Demo);
  const fetchSavedItems = async () => {
    try {
      const val = await AsyncStorage.getItem("userFoodPreferences");
      // if(val !== null) {
      //   setResult(val)
      // }
        //  console.log("val", val)
       return JSON.parse(val)
    } catch(error) {
      console.log(error)
    }
  }



  // const fetchSelection = async () => {
  //   try {
  //     const result = [{}];
  //     const val = await AsyncStorage.getItem("userPreferences");
  //     result = JSON.parse(val);
  //      console.log(result);
  //     return result
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // fetchSelection().then(response => console.log(response));
  fetchSavedItems().then(response => 
      {
        if(response !== null) {
             setResult(response);
            // response.map((item) => console.log(item.description))
            // console.log(response)
       } else {
        //  setResult(Demo);
       }
        
      }
    
    )
    // useEffect(() => {
    //   // fetchSavedItems()
    //   fetchSavedItems().then(response => {
    //     if(response !== null)
    //     {
    //       setResult(response)
    //       console.log(response)
    //     }
    //   }
    //   )
    // }, [])

  
    return (
      

      <View style={styles.containerHome}>
        <View style={styles.top}>
          
        </View>
        
        {/* {console.log("results", result)} */}
        
        
        <CardStack
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={swiper => (this.swiper = swiper)}
          >
            {result.map((item, index) => (
              <Card key={index} 
              onSwipedRight={() => 
                 AsyncStorage.setItem(index.toString(), JSON.stringify(item))
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

// export const preferenceUpdate = () => {
//   console.log("I have been saved");
//   // useEffect(() => {
//   //   console.log("I have been saved");
//   // }, [save])
// }

export default Home;