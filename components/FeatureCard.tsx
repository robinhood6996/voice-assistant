import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
type Props = {
  title: string;
  description: string;
  color: string;
};

const FeatureCard = ({ title, description, color }: Props) => {
  return (
    <View style={{ ...style.featureCard, backgroundColor: color }}>
      <View>
        <Text style={{ fontSize: wp(6), fontWeight: "600" }}>{title}</Text>
      </View>
      <View>
        <Text style={{ fontSize: wp(4) }}>{description}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  featureCard: {
    padding: 5,
    height: wp(40),
    margin: 10,
    borderRadius: 5,
  },
});

export default FeatureCard;
