import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, { add, cond, divide, Extrapolate, interpolate, lessThan, multiply, sub } from 'react-native-reanimated';

const styles = StyleSheet.create({
    remove: {
        color: "white",
        fontSize: 14
    }
})

function Action(props){
    const HEIGHT = 64;
    const size = cond(lessThan(props.x, HEIGHT), props.x, add(props.x, HEIGHT));
    const translateX = cond(lessThan(props.x, HEIGHT), 0, divide(sub(props.x, HEIGHT), 2))
    const borderRadius = divide(size, 2);
    const scale = interpolate(size, {
        inputRange: [30, 40],
        outputRange: [0.001, 1],
        extrapolate: Extrapolate.CLAMP
    })
    
    const iconOpacity = interpolate(size, {
        inputRange: [HEIGHT - 10, HEIGHT + 10],
        outputRange: [1, 0]
    });
    const textOpacity = interpolate(size, {
        inputRange: [HEIGHT - 10, HEIGHT + 10],
        outputRange: [0, 1]
    });
    return (
        <Animated.View
            style={{
                backgroundColor: "#D93F12",
                justifyContent: "center",
                alignItems: "center",
                height: size,
                width: size,
                borderRadius,
                transform: [{ translateX }]
            }}
        >
            <Animated.View 
                style={{
                    height: 5,
                    width: 20,
                    backgroundColor: "white",
                    opacity: iconOpacity,
                    transform: [{ scale }]
                }}
            />
            <Animated.View 
                style={{
                    ...StyleSheet.absoluteFillObject,
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: multiply(textOpacity, props.deleteOpacity) 
                }}
                >
                    <Text style={styles.remove}>Remove</Text>
                </Animated.View>

        </Animated.View>
    )
}

export default Action;