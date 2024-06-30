import { SafeAreaView, Text, View } from "react-native";

type Props = {};

const Chat = (props: Props) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Chat</Text>
      </View>
    </>
  );
};

export default Chat;
