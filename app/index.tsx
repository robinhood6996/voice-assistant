import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import chatGPT from "../assets/images/chatgpt.png";
import dalle from "../assets/images/dalle.png";
import smartai from "../assets/images/smart-ai.png";
import FeatureCard from "@/components/FeatureCard";
export default function Index() {
  return (
    <ScrollView>
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
        <View style={{ margin: 10 }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "800",
            }}
          >
            Features
          </Text>
        </View>
        <FeatureCard
          title="ChatGPT"
          description="ChatGPT is a chatbot and virtual assistant developed by OpenAI and
          launched on November 30, 2022. Based on large language models, it
          enables users to refine and steer a conversation towards a desired
          length, format, style, level of detail, and language."
          color="#9CEFC8"
          image={chatGPT}
        />
        <FeatureCard
          title="DALL-E"
          description="ChatGPT is a chatbot and virtual assistant developed by OpenAI and
          launched on November 30, 2022. Based on large language models, it
          enables users to refine and steer a conversation towards a desired
          length, format, style, level of detail, and language."
          color="#E5CEFE"
          image={dalle}
        />
        <FeatureCard
          title="Smart AI"
          description="ChatGPT is a chatbot and virtual assistant developed by OpenAI and
          launched on November 30, 2022. Based on large language models, it
          enables users to refine and steer a conversation towards a desired
          length, format, style, level of detail, and language."
          color="#96EAF4"
          image={smartai}
        />
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    paddingBottom: 100,
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
