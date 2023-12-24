import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DashedLine from '../../components/DashedLine';

const DashedScreen = () => {
  return (
    <View style={{paddingHorizontal: 24}}>
      <DashedLine dashLength={9} style={{ marginBottom: 30 }} />
      <DashedLine
        dashLength={10}
        dashThickness={8}
        style={{ marginBottom: 30 }}
      />
      <DashedLine
        dashLength={10}
        dashThickness={8}
        dashGap={5}
        style={{ marginBottom: 30 }}
      />

      <DashedLine
        dashLength={10}
        dashThickness={8}
        dashGap={5}
        dashColor="#c32626"
        style={{ marginBottom: 30 }}
      />

      {/* <DashedLine
        dashLength={10}
        dashThickness={8}
        dashGap={5}
        dashColor="#c32626"
        dashStyle={{ borderRadius: 5 }}
        style={{ marginBottom: 30 }}
      /> */}

      <DashedLine axis="vertical" dashLength={5}  />
    </View>
  );
};

export default DashedScreen;
