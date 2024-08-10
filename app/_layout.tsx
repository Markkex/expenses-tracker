import { StyleSheet } from "react-native";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import React from "react";
import "@/i18n";
import { Stack } from "expo-router";
import store from "../store/store";
import { Provider } from "react-redux";

const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#3498db",
    secondary: "#f1c40f",
    tertiary: "#a1b2c3",
  },
};

const RootLayout = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </PaperProvider>
    </Provider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
});
