import * as React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Explore from "../screens/Explore";
import TabBarLabel from "../components/navigations/TabBarLabel";
import TabBarIcon from "../components/navigations/TabBarIcon";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: styles.tabBarStyle }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => ({
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} text="Home"></TabBarLabel>
          ),
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} name="home"></TabBarIcon>;
          },
        })}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={() => ({
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} text="Explore"></TabBarLabel>
          ),
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} name="search"></TabBarIcon>;
          },
        })}
      />
      <Tab.Screen
        name="Courses"
        component={Home}
        options={() => ({
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} text="Courses"></TabBarLabel>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIcon focused={focused} name="play-circle"></TabBarIcon>
            );
          },
        })}
      />
      <Tab.Screen
        name="Account"
        component={Home}
        options={() => ({
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} text="Account"></TabBarLabel>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIcon focused={focused} name="person-circle"></TabBarIcon>
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#FFFFFF",
    elevation: 0,
    height: 70,
    borderWidth: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
