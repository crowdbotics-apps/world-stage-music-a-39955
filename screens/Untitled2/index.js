import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.tWOjLdCg}><ImageBackground style={styles.YFiswxSL} source={require("./loginwsm.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.OoUoCfNe} source={require("./logingoogle.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.wNbSBAkC} source={require("./loginemail.png")} resizeMode="cover"><ImageBackground style={styles.GiFJsCMf} source={require("./loginterms.png")} resizeMode="cover"></ImageBackground></ImageBackground><ImageBackground style={styles.IGOjqhZp} source={require("./loginmember.png")} resizeMode="cover"></ImageBackground></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  XzEcSjAx: {
    width: 351,
    height: 572,
    position: "absolute",
    left: -3,
    top: 0
  },
  tWOjLdCg: {
    height: 569,
    width: 347,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    left: 1,
    top: 2,
    borderWidth: 4
  },
  YFiswxSL: {
    width: 288,
    height: 309,
    position: "absolute",
    left: 29,
    top: 14
  },
  OoUoCfNe: {
    width: 288,
    height: 118,
    position: "absolute",
    left: 29.5,
    top: 298
  },
  wNbSBAkC: {
    width: 329,
    height: 103,
    position: "absolute",
    left: 9,
    top: 362
  },
  IGOjqhZp: {
    width: 338,
    height: 89,
    position: "absolute",
    left: 4,
    top: 430
  },
  GiFJsCMf: {
    width: 309,
    height: 62,
    position: "absolute",
    left: 10,
    top: 127
  }
});
export default Untitled2;