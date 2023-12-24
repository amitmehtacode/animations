/* eslint-disable prettier/prettier */
import { Animated, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';

const FadeAnimation = () => {
  const Fade = useRef(new Animated.Value(0)).current;
  const image =
    'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80';

  useEffect(() => {
    Animated.timing(Fade, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [Fade]);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.image, { opacity: Fade }]}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

export default FadeAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginTop: 5,
    height: 200,
    width: 200,
  },
});
