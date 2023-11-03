import React from "react";
import { StatusBar, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import FunctionalComponent from "./screens/functional_components";
import ClassComponent from "./screens/class_components";
import News from "./screens/news";
import NewsDetail from "./screens/news_detail";

const Stack = createNativeStackNavigator();

const App = () => {
  const headerStyle = {
    headerTitleStyle: { color: "white" },
    headerStyle: {
      backgroundColor: "#AA0002",
    },
    headerTintColor: "white",
  };

  return (
    <NavigationContainer>
      <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 24}}>
        Moch. Andi Divangga Pratama {"\n"}
        1203210005
      </Text>
      <StatusBar style="auto" backgroundColor="#AA0002" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "React Native Networking",
            ...headerStyle,
          }}
        />

        <Stack.Screen
          name="FunctionalComponent"
          component={FunctionalComponent}
          options={{
            title: "Functional Component",
            ...headerStyle,
          }}
        />

        <Stack.Screen
          name="ClassComponent"
          component={ClassComponent}
          options={{
            title: "Class Component",
            ...headerStyle,
          }}
        />

        <Stack.Screen
          name="News"
          component={News}
          options={{
            title: "Techno News",
            ...headerStyle,
          }}
        />

        <Stack.Screen
          name="NewsDetail"
          component={NewsDetail}
          options={{
            title: "News Detail",
            ...headerStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
