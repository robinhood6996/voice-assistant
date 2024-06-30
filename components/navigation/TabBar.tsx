import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TabBarIcon } from "./TabBarIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {};

export default function TabBar({ state, descriptors, navigation }) {
  const primaryColor = "#0892b2";
  const greyColor = "#737373";
  const Icons = {
    home: (props) => <TabBarIcon name="home" {...props} />,
    chat: (props) => (
      <TabBarIcon name="chatbubble-ellipses-outline" {...props} />
    ),
    account: (props) => (
      <MaterialCommunityIcons
        name="account-circle-outline"
        size={28}
        {...props}
      />
    ),
  };
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
          >
            {Icons[route.name]({ color: isFocused ? primaryColor : greyColor })}
            <Text
              style={{
                color: isFocused ? primaryColor : greyColor,
                fontWeight: 700,
              }}
            >
              {label.toUpperCase()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabBarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});
