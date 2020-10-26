import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import PayButton from "./components/PayButton";

import HomeScreen from "./screens/Home";
import PayScreen from "./screens/Pay";
import WalletScreen from "./screens/Wallet";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Wallet: {
    lib: AntDesign,
    name: "creditcard",
  },
  Notifications: {
    lib: Ionicons,
    name: "ios-notifications-outline",
  },
  Settings: {
    lib: AntDesign,
    name: "setting",
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Pay") {
            return (
              <PayButton
                onPress={() => navigation.navigate("Pay")}
                focused={focused}
              />
            );
          }

          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#131418",
          borderTopColor: "rgba(255,255,255, 0.2)",
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#92929c",
      }}
    >
      <Tab.Screen
        options={{ title: "Home" }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ title: "Carteira" }}
        name="Wallet"
        component={WalletScreen}
      />
      <Tab.Screen options={{ title: "" }} name="Pay" component={PayScreen} />
      <Tab.Screen
        options={{ title: "Notificações" }}
        name="Notifications"
        component={PayScreen}
      />
      <Tab.Screen
        options={{ title: "Ajustes" }}
        name="Settings"
        component={PayScreen}
      />
    </Tab.Navigator>
  );
}
