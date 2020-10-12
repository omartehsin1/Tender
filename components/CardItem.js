import React, { useState } from 'react';
import styles from '../assets/styles';
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlipCard from 'react-native-flip-card';

const CardItem = ({
    actions,
    description,
    image,
    name,
    recipe,
    instructions,
    onPressLeft,
    onPressRight,
    variant
}) => {

    const fullwidth = Dimensions.get('window').width;
    const imageStyle = [
        {
            borderRadius: 8,
            width: variant ? fullwidth / 2 - 30 : fullwidth - 80,
            height: variant ? 170 : 350,
            margin: variant ? 0 : 20
        }
    ];

    const nameStyle = [
        {
            paddingTop: variant ? 10 : 15,
            paddingBottom: variant ? 5 : 7,
            color: '#363636',
            fontSize: variant ? 15 : 30
        }
    ];
    const [isClickable, setIsClickable] = useState(false);
    
    return (
        <View >
            <View style={styles.containerCardItem}>
                
                <FlipCard
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={isClickable}
                    style={flipCardStyles.card}
                    clickable={false}
                    onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', recipe) }}>
                        <View style={flipCardStyles.face}>
                            <Image source={image} style={imageStyle} />
                            <Text style={nameStyle}>{name}</Text>
                            {description && (
                            <Text style={styles.descriptionCardItem}>{description}</Text>
                            )}
                            {actions && (
                            <View style={styles.actionsCardItem}>
                                <TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
                                    <Text style={styles.like}>
                                    
                                    <Icon name="thumbs-o-up" size={20} color="#900" />
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => onPressRight()}
                                >
                                    <Text style={styles.dislike}>
                                    
                                    <Icon name="thumbs-o-down" size={20} color="#900" />
                                    </Text>
                                </TouchableOpacity>

                            </View>

                            )}
                        </View>
                    <ScrollView style={flipCardStyles.back}>
                        <Text>Ingredients: {recipe}</Text>
                        <Text>Instructions: {instructions}</Text>
                    </ScrollView>
                        {/* <View style={flipCardStyles.back}>
                            
                        </View> */}
                    </FlipCard>

                    <View>
                        <TouchableOpacity onPress={() => setIsClickable(!isClickable)}>
                            <Icon name="info-circle" size={30} color="#900" />
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )

}

const flipCardStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },

    card: {
      width: 375,
      height: 600,
    },
    face: {
       flex:1,
    //   backgroundColor: '#2ecc71',
      justifyContent: 'center',
      alignItems: 'center',
    },
    back: {
    margin: 40
    },
 
  });

export default CardItem;