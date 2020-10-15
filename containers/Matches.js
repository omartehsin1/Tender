import React, { useState } from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import FlipCard from 'react-native-flip-card';
import Icon from 'react-native-vector-icons/FontAwesome';
//padding: 100
const Matches = (props) => {
  const [isClickable, setIsClickable] = useState(false);
  // console.log(test);
    return (
      <View style={styles.container}>
        {/* <Text>{props.test}</Text> */}
        {/* <View>
        <FlipCard
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={isClickable}
        style={styles.card}
        clickable={true}
        onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
      >
        
        <View style={styles.face}>
          <Text>The Face</Text>
        </View>
        
        <View style={styles.back}>
          <Text>The Back</Text>

        </View>

        
      </FlipCard>
      <View>
          <TouchableOpacity onPress={() => setIsClickable(!isClickable)}>
            <Icon name="info-circle" size={30} color="#900" />
          </TouchableOpacity>
        </View>
      </View> */}


      </View>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  //   marginTop: 20,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
  card: {
    width:200,
    backgroundColor: 'red'
  },
  face: {
     flex:1,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    flex:1,
    height: 100,
    backgroundColor: '#f1c40f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // button: {
  //   width: 100,
  //   height: 30,
  //   marginTop: 30,
  //   paddingTop: 6,
  //   paddingBottom: 6,
  //   borderRadius: 3,
  //   borderWidth: 1,
  //   backgroundColor: '#007AFF',
  //   borderColor: 'transparent',
  // },
  // buttonText: {
  //   color: '#fff',
  //   textAlign: 'center',
  // },
  img: {
    flex: 1,
    height: 64
  }
});

export default Matches;