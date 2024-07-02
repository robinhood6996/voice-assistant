import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
type Props = {
  title: string;
  description: string;
  color: string;
  image: ImageSourcePropType | undefined;
};

const FeatureCard = ({ title, description, color, image }: Props) => {
  return (
    <View style={{ ...style.featureCard, backgroundColor: color }}>
      <View
        style={{ flexDirection: "row", justifyContent: "flex-start", gap: 4 }}
      >
        <Image source={image} style={{ width: wp(10), height: wp(10) }} />
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
    padding: 10,
    height: wp(45),
    margin: 10,
    borderRadius: 5,
  },
});

export default FeatureCard;
