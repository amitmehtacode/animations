import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.redbox} />
        <View style={styles.bluebox} />
      </View>
      <View>
        <View style={styles.blackbox} />
        <View style={styles.greenbox} />
      </View>
    </View>
  );
};

export default FlexBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: 600,
  },
  redbox: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  bluebox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  blackbox: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
  greenbox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
});
