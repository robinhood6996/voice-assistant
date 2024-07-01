import FeatureCard from "@/components/FeatureCard";
import { SafeAreaView, Text, View } from "react-native";

type Props = {};

const Chat = (props: Props) => {
  return (
    <>
      <SafeAreaView style={{ paddingTop: 25 }}>
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
        />
        <FeatureCard
          title="DALL-E"
          description="ChatGPT is a chatbot and virtual assistant developed by OpenAI and
          launched on November 30, 2022. Based on large language models, it
          enables users to refine and steer a conversation towards a desired
          length, format, style, level of detail, and language."
          color="#E5CEFE"
        />
        <FeatureCard
          title="Smart AI"
          description="ChatGPT is a chatbot and virtual assistant developed by OpenAI and
          launched on November 30, 2022. Based on large language models, it
          enables users to refine and steer a conversation towards a desired
          length, format, style, level of detail, and language."
          color="#96EAF4"
        />
      </SafeAreaView>
    </>
  );
};

export default Chat;
