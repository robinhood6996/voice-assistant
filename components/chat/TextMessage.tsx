import { Message } from "@/types/message";
import { View, Text, StyleSheet, Image } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

type Props = {
  message: Message;
};

const TextMessage = ({ message }: Props) => {
  return (
    <View
      style={[
        style.chatItem,
        { backgroundColor: message.role == "user" ? "#3369FF" : "#D8D8D8" },
      ]}
    >
      <View style={style.messgaeParent}>
        <Text
          style={[
            style.messageText,
            { color: message.role == "user" ? "white" : "black" },
          ]}
        >
          {message.content.includes("http") ? (
            <Image
              source={{ uri: message.content }}
              style={{
                width: widthPercentageToDP(60),
                height: widthPercentageToDP(60),
                resizeMode: "cover",
              }}
            />
          ) : (
            message.content
          )}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  chatItem: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    width: widthPercentageToDP(70),
  },
  messgaeParent: {},
  messageText: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
export default TextMessage;
