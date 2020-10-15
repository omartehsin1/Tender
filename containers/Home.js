  
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import styles from '../assets/styles';
import CardItem from '../components/CardItem';
import Demo from '../assets/data/demo';
import MatchesScreen from './Matches'

const Home = () => {
  const test = 'This is a test';

    return (

      <View style={styles.containerHome}>
        <View style={styles.top}>
          
        </View>
        <CardStack
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={swiper => (this.swiper = swiper)}
           onSwipedRight={() => <MatchesScreen test={test}/>}
          >
            {Demo.map((item, index) => (
              <Card key={index} 
              // onSwipedRight={() => <MatchesScreen test={test}/>}
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