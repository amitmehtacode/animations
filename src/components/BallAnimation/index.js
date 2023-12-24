/* eslint-disable prettier/prettier */
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useRef } from 'react';

const BallAnimation = () => {
  const positionRef = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const randomNum = Math.floor(Math.random() * 101);

  const moveBall = () => {
    Animated.timing(positionRef, {
      toValue: { x: randomNum, y: randomNum },
      useNativeDriver: false,
      duration: 1000,
      delay: 100,
    }).start();
  };
  return (
    <View style={styles.container}>
      <Animated.View style={positionRef.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
      <TouchableWithoutFeedback onPress={moveBall}>
        <Text>Move</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default BallAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'red',
  },
});
