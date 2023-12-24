/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import BallAnimation from '../../components/BallAnimation';
import FadeAnimation from '../../components/FadeAnimation';
import ButtonWidthAnimation from '../../components/buttonWidthAnimation';
import FlexBox from '../../components/FlexboxAnimation';
import DashedScreen from '../DashedScreen';
import LoadingSpinner from '../../components/LoadingSpinner';
import CircularProgressBar from '../../components/CircularLoader';

const ListScreen = ({ navigation, route }) => {
  const dataId = route?.params?.data;

  const ShowListView = () => {
    switch (dataId) {
      case 1:
        return <BallAnimation />;
      case 2:
        return <FadeAnimation />;
      case 3:
        return <ButtonWidthAnimation />;
      case 4:
        return <FlexBox />;
      case 5:
        return <DashedScreen />;
      case 6:
        return <LoadingSpinner />;
      case 7:
        return <CircularProgressBar />
      default:
        break;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ margin: 20, marginTop: 50 }}
        onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>

      <ShowListView />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({});
