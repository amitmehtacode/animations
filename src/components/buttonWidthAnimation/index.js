import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef } from 'react';

const ButtonWidthAnimation = () => {
  const widthAnimation = useRef(new Animated.Value(350)).current;

  const onCancelPress = () => {
    Animated.timing(widthAnimation, {
      toValue: 65,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onCancelPress}>
      <Animated.View
        style={{
          width: widthAnimation,
          backgroundColor: 'blue',
          padding: 16,
          borderRadius: 50,
          alignItems: 'center'
        }}>
        <Text>Press</Text>
      </Animated.View>
    </TouchableOpacity>
    // <View style={styles.container}>
    //   <Animated.
    //     onPress={onCancelPress}
    //     style={[styles.buttonContainer, { paddingHorizontal: widthAnimation }]}>
    //     <Text>Cancel</Text>
    //   </Animated.>
    // </View>
  );
};

export default ButtonWidthAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    // marginHorizontal: 20,
  },
  buttonContainer: {
    // paddingHorizontal: 150,
    paddingVertical: 15,
    backgroundColor: 'red',
    borderRadius: 50,
  },
});
