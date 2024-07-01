import { Image, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function Index() {
  return (
    <View style={style.parent}>
      <View>
        <Text style={style.heading}>TALK AI</Text>
      </View>
      <View>
        <Text style={style.subHeading}>
          The voice assistant to answer your questions
        </Text>
      </View>
      <View style={style.image}>
        <Image
          source={require("../assets/images/bot.png")}
          style={{ width: wp(75), height: wp(75) }}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: wp(10),
    fontWeight: "800",
  },
  subHeading: {
    fontSize: wp(4),
    fontWeight: "400",
  },
  image: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 0,
  },
});
