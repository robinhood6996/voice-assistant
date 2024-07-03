import FeatureCard from "@/components/FeatureCard";
import ChatHeader from "@/components/chat/ChatHeader";
import { Feather, Fontisto, Ionicons } from "@expo/vector-icons";
import { Image, SafeAreaView, Text, View } from "react-native";

type Props = {};

const Chat = (props: Props) => {
  return (
    <>
      <SafeAreaView style={{ paddingTop: 25 }}>
        <ChatHeader />
      </SafeAreaView>
    </>
  );
};

export default Chat;
