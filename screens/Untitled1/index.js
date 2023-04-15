import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.NyPZapvO} source={require("./pexels-brett-sayles-4001269.jpg")} resizeMode="cover"><View style={styles.koXOXDcr}><Text style={styles.IauLayBG}>World Stage Music is a platform dedicated to empowering every GENRE of music. It starts with Fans/Artists and Producers like you to form collaborative efforts to implement growth and success in the underground music industry.  This APP will allow you to do just that. Climb your way through the rankings to become a certified WSM ARTIST/PRODUCER.  Promote your uploaded music to climb your way to the top of the charts. Participate in contests, earn rewards, empower your genre. If this sounds like you…Please click the GET STARTED button below to launch your new career as a World Stage Music artist / producer / fan. </Text><Text style={styles.lPgSjtLT}>Rock, Country,Hip-Hop, Rap, R&B, Reggae, Punk, Comedy and MUCH MUCH MORE!</Text><ImageBackground style={styles.OBngVftl} source={require("./musicnotes.png")} resizeMode="cover"><ImageBackground style={styles.aTKFfskr} source={require("./all1.png")} resizeMode="cover"></ImageBackground></ImageBackground><Pressable onPress={() => {
            navigation.navigate("Untitled2");
          }}><View style={styles.jvQYVKrs}><Text style={styles.SfMRBMOL}>GET STARTED</Text></View></Pressable></View></ImageBackground><View style={styles.WFcncjgj}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  UWfPepSy: {
    width: 355,
    height: 570,
    position: "absolute",
    left: -3,
    top: 1
  },
  dCRLvKrN: {
    height: 570,
    width: 355,
    backgroundColor: "#000000",
    borderRadius: 0,
    color: "#777777",
    opacity: 0.51
  },
  hkLTdBDs: {
    width: 334,
    height: 203,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 179,
    left: 10,
    color: "#ffffff",
    fontWeight: "700",
    textAlign: "center"
  },
  KqwJYTfI: {
    width: 338,
    height: 552
  },
  copDiTun: {
    width: 282,
    height: 255,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    color: "#e7e5e5",
    fontWeight: "700",
    fontFamily: "Montserrat",
    position: "absolute",
    left: 30,
    top: 30
  },
  TVQSOIXz: {
    height: 506,
    width: 295,
    backgroundColor: "#111111",
    borderRadius: 0,
    color: "#777777",
    opacity: 0.42,
    borderColor: "#000000",
    borderWidth: 0
  },
  YsBZrnBn: {
    width: 289,
    height: 209,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    color: "#ffffff",
    position: "absolute",
    textAlign: "center",
    left: 23.5,
    top: 32,
    fontWeight: "700"
  },
  flQdamfh: {
    width: 284,
    height: 90,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 22,
    top: 279,
    color: "#fffcfc",
    textAlign: "center"
  },
  TnIAUAyZ: {
    width: 107,
    height: 62,
    position: "absolute"
  },
  DxuDEWhd: {
    width: 343,
    height: 122,
    position: "absolute",
    left: -6,
    top: 289
  },
  UHhcarEe: {
    height: 44,
    width: 211,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    left: 63,
    top: 477
  },
  yUPnfIHG: {
    width: 124,
    height: 24,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    position: "absolute",
    left: 43,
    textAlign: "center",
    top: 15,
    fontFamily: "Nunito",
    color: "#1c752a",
    fontWeight: "700"
  },
  YagtfMPT: {
    width: 307,
    height: 62,
    position: "absolute",
    left: 20,
    top: 112
  },
  OtwxBwiJ: {
    width: 338,
    height: 197,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    color: "#ffffff"
  },
  NyPZapvO: {
    width: 335,
    height: 558
  },
  WFcncjgj: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  koXOXDcr: {
    height: 557,
    width: 338,
    backgroundColor: "#131313",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    left: -1,
    top: -1,
    opacity: 0.5,
    borderColor: "#e6c74e",
    borderWidth: 6
  },
  IauLayBG: {
    width: 308,
    height: 205,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center",
    color: "#ffffff",
    position: "absolute",
    left: 15,
    top: 46,
    fontWeight: "700"
  },
  lPgSjtLT: {
    width: 283,
    height: 50,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    position: "absolute",
    left: 27.5,
    top: 279,
    color: "#fdfbfb",
    fontWeight: "700",
    textAlign: "center"
  },
  OBngVftl: {
    width: 336,
    height: 105,
    position: "absolute",
    left: 5,
    top: 309
  },
  JoZnpJqi: {
    width: 336,
    height: 156,
    position: "absolute",
    left: 13,
    top: 371
  },
  aTKFfskr: {
    width: 306,
    height: 52,
    position: "absolute",
    left: 10,
    top: 114
  },
  jvQYVKrs: {
    height: 50,
    width: 234,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    left: 50,
    top: 486
  },
  SfMRBMOL: {
    width: 232,
    height: 50,
    lineHeight: 14,
    fontSize: 20,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    left: 3,
    top: 17,
    color: "#000000",
    fontWeight: "700"
  }
});
export default Untitled1;