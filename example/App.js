import React, { Component } from "react";
import {
  Linking,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from "react-native";
import MyIcon from "react-native-custom-icon";
import IcomoonConfig from "./assets/icomoon/selection.json";
import { human, iOSColors, iOSUIKit } from "react-native-typography";

const title = "Welcome to \n" + "React Native Custom Icon!";
const content =
  "React Native Custom Icon is a library which makes easier to use your own fonts as custom icons.\n" +
  "It uses react-native-vector-icons library as peer dependency and you need to use Icomoon to \n";
+"create your own icons as .ttf font format.";

const instructions =
  "Detailed information is on Medium blog\n" + "to get started: ";
const instructions2 =
  "Basic usage and installation is on Github\n" + "check README out: ";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{title}</Text>
        <Text style={styles.instructions}>{content}</Text>
        <View
          style={{
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              ...iOSUIKit.largeTitleEmphasized,
              fontSize: 25,
              fontWeight: "bold"
            }}
          >
            Medium Blog
          </Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.google.com");
            }}
          >
            <MyIcon
              name="medium-logo"
              color="purple"
              size={45}
              config={IcomoonConfig}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            ...iOSUIKit.largeTitleEmphasized,
            top: 12,
            fontSize: 25,
            fontWeight: "bold"
          }}
        >
          Github README
        </Text>
        <Text style={styles.instructions}>{instructions2}</Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              "https://www.github.com/WrathChaos/react-native-custom-icon"
            );
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <MyIcon
              name="github-logo"
              color="#7E11FF"
              size={35}
              config={IcomoonConfig}
            />
            <View style={{ left: 8 }}>
              <MyIcon
                name="github"
                color="#7E11FF"
                size={35}
                config={IcomoonConfig}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "30%",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    ...iOSUIKit.largeTitleEmphasized,
    fontSize: 26,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    ...human.footnote,
    color: iOSColors.gray,
    padding: 8,
    textAlign: "center",
    marginBottom: 5
  }
});
