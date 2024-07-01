import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type Props = {
  color: string;
  label: string;
  isFocused: boolean;
  routeName: string;
};

const TabBarButton = (props: Props) => {
  const { color, isFocused, label, routeName } = props;
  const scale = useSharedValue(0);
  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.5]);
    const top = interpolate(scale.value, [0, 1], [0, 8]);

    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });
  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      opacity,
    };
  });
  return (
    <Pressable style={style.container} {...props}>
      <Animated.View style={[{ color, fontSize: 11 }, animatedIconStyle]}>
        {routeName == "index" ? (
          <MaterialCommunityIcons name="home" size={28} color={color} />
        ) : routeName === "chat" ? (
          <MaterialCommunityIcons
            name="chat-processing-outline"
            size={28}
            color={color}
          />
        ) : (
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={28}
            color={color}
          />
        )}
      </Animated.View>
      <Animated.Text style={[animatedTextStyle]}>{label}</Animated.Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});

export default TabBarButton;
