import FeatureCard from "@/components/FeatureCard";
import ChatHeader from "@/components/chat/ChatHeader";
import TextMessage from "@/components/chat/TextMessage";
import { dummyMsgs } from "@/constants/chats";
import { Feather, Fontisto, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

type Props = {};

const Chat = (props: Props) => {
  const [isRecording, setIsRecording] = useState(false);
  return (
    <>
      <SafeAreaView style={{ paddingTop: 25 }}>
        <ChatHeader />
        <ScrollView>
          <View>
            {dummyMsgs.map((msg) => {
              if (msg.role === "assistant") {
                return (
                  <View
                    key={msg.content}
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    <TextMessage message={msg} />
                  </View>
                );
              } else {
                return (
                  <View
                    key={msg.content}
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    <TextMessage message={msg} />
                  </View>
                );
              }
            })}
          </View>
        </ScrollView>
        <View className="">
          <View>
            {!isRecording ? (
              <Image
                source={require("../assets/images/voice-active.png")}
                style={{ width: 60, height: 60 }}
              />
            ) : (
              <Image
                source={{
                  uri: "https://media.tenor.com/w63dY06lsp8AAAAi/mic.gif",
                }}
                style={{ width: 70, height: 70 }}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Chat;
