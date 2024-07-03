import { Feather, Fontisto, Ionicons } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";

type Props = {};

const ChatHeader = (props: Props) => {
  return (
    <View
      style={{
        margin: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 4,
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 4,
        }}
      >
        <Image source={require("../../assets/images/robot.png")} />
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "left",
              padding: 0,
              color: "#3369FF",
            }}
          >
            TalkAI
          </Text>
          <Text style={{ color: "#3ABF38" }}>
            <Fontisto name="radio-btn-active" size={10} color="#3ABF38" />{" "}
            Online
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Ionicons name="volume-medium-outline" size={30} color="black" />
        <Feather
          name="upload"
          size={24}
          color="black"
          disabled={true}
          style={{ opacity: 0.5 }}
        />
      </View>
    </View>
  );
};

export default ChatHeader;
