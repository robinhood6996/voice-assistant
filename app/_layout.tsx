import TabBar from "../components/navigation/TabBar";
import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="home" options={{ headerShown: false }} />
      <Tabs.Screen name="chat" options={{ headerShown: false }} />
      <Tabs.Screen name="account" options={{ headerShown: false }} />
    </Tabs>
  );
}
