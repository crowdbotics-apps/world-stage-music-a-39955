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
    }}><View style={styles.tWOjLdCg}><ImageBackground style={styles.OoUoCfNe} source={require("./logingoogle.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.wNbSBAkC} source={require("./loginemail.png")} resizeMode="cover"><ImageBackground style={styles.GiFJsCMf} source={require("./loginterms.png")} resizeMode="cover"></ImageBackground></ImageBackground><ImageBackground style={styles.IGOjqhZp} source={require("./loginmember.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.yWxiZNbM} source={require("./loginmusicnoyeblack.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.VJqHyBht} source={require("./loginwsm.png")} resizeMode="cover"></ImageBackground></View></ScrollView>
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
    width: 261,
    height: 246,
    position: "absolute",
    left: 45,
    top: 26
  },
  OoUoCfNe: {
    width: 288,
    height: 118,
    position: "absolute",
    left: 29.5,
    top: 287
  },
  wNbSBAkC: {
    width: 330,
    height: 103,
    position: "absolute",
    left: 8.5,
    top: 353
  },
  IGOjqhZp: {
    width: 338,
    height: 89,
    position: "absolute",
    left: 0,
    top: 441
  },
  GiFJsCMf: {
    width: 309,
    height: 62,
    position: "absolute",
    left: 8,
    top: 150
  },
  ZIUnzINr: {
    width: 342,
    height: 185,
    position: "absolute",
    left: -34,
    top: 66
  },
  yWxiZNbM: {
    width: 318,
    height: 103,
    position: "absolute",
    left: 10,
    top: 171
  },
  VJqHyBht: {
    width: 332,
    height: 321,
    position: "absolute",
    left: 7.5,
    top: 33
  }
});
export default Untitled2;