/* eslint-disable react/no-unstable-nested-components */
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {data} from '../../data/data';

// https://www.bacancytechnology.com/blog/implement-react-native-animations

const HomeScreen = ({navigation}) => {
  const renderItem = ({item, index}) => {
    const {title, id} = item;

    const onContentPress = () => {
      navigation.navigate('List', {data: id});
    };

    return (
      <TouchableOpacity onPress={onContentPress} style={styles.listContainer}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  };

  const ListHeaderComponent = () => {
    return <Text style={styles.heading}>List of Animations</Text>;
  };

  const ListFooterComponent = () => {
    return <Text style={styles.heading}>*** End ***</Text>;
  };

  const keyExtractor = (item, index) => index.toString();

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<ListHeaderComponent />}
        ListHeaderComponentStyle={styles.ListHeaderComponentStyle}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        extraData={data}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<ListFooterComponent />}
        ListFooterComponentStyle={styles.ListFooterComponentStyle}
      />
    </View>
  );
};

export default HomeScreen;
