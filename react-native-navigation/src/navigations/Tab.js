import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Mail, Meet, Settings } from "../screens/TabScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Settings"
      tabBarOptions={{
        labelPosition: "beside-icon",
        showLabel: false,
        style: {
          backgroundColor: "#54b7f9",
          borderTopColor: "#ffffff",
          borderTopWidth: 2,
        },
        activeTintColor: "#0b92e9",
        inactiveTintColor: "#cfcfcf",
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => {
          let name = "";
          if (route.name === "Mail") name = "email";
          else if (route.name === "Meet") name = "video";
          else name = "cog-box";
          return TabIcon({ ...props, name });
        },
      })}
    >
      <Tab.Screen
        name="Mail"
        component={Mail}
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: (props) =>
            TabIcon({
              ...props,
              name: props.focused ? "email" : "email-outline",
            }),
        }}
      />
      <Tab.Screen
        name="Meet"
        component={Meet}
        options={{
          tabBarIcon: (props) =>
            TabIcon({
              ...props,
              name: props.focused ? "video" : "video-outline",
            }),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (props) =>
            TabIcon({
              ...props,
              name: props.focused ? "cog-box" : "cog-outline",
            }),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
