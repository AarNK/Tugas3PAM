import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

const HomeScreen = ({ navigation }) => {
  const [Awal, setAwal] = useState("");
  const [Tujuan, setTujuan] = useState("");
  const [Tgl, setTgl] = useState("01 Januari 2022");

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Icon name="bars" size={30} style={{ color: "#fff", margin: 20, top: 50 }} />
        <Icon
          name="user-tie"
          size={30}
          style={{
            color: "#fff",
            marginLeft: "auto",
            marginRight: 20,
            marginTop: -50,
            top: 50
          }}
        />
        <Text style={styles.headerText}>Hiling.id</Text>
      </View>
      <View style={styles.box2} />
      <View style={styles.boxInput}>
        <SafeAreaView>
          <Text style={styles.textInput}>Lokasi Keberangkatan</Text>
          <TextInput
            placeholder="Masukkan lokasi keberangkatan"
            style={styles.input}
            onChangeText={(val) => setAwal(val)}
          />
          <Text style={styles.textInput}>Lokasi Tujuan</Text>
          <TextInput
            placeholder="Masukkan Lokasi Tujuan"
            style={styles.input}
            onChangeText={(val) => setTujuan(val)}
          />
          <Text style={styles.textInput}>Tanggal Keberangkatan</Text>
          <TextInput
            placeholder="Masukkan Tanggal Keberangkatan"
            style={styles.input}
            onChangeText={(val) => setTgl(val)}
          />
        </SafeAreaView>
        <Button
          title="Cari"
          color="#212121"
          onPress={() =>
            navigation.navigate("Hasil Pencarian", {
              awal: Awal,
              tujuan: Tujuan,
              tgl: Tgl,
            })
          }
        />
      </View>
      <Text style={{ textAlign: "center", marginBottom: 20 }}>
        Copyright Aaron | 120140232
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: "#212121",
    flex: 1.3,
  },
  headerText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 200,
  },
  box2: {
    backgroundColor: "#fff",
    flex: 1,
    marginBottom : 20,
  },
  boxInput: {
    backgroundColor: "white",
    position: "absolute",
    top: 300,
    left: 60,
    padding: 20,
    width: 300,
    height: "auto",
    borderRadius: 20,
    borderWidth: 1,
  },
  textInput: {
    fontWeight: "700",
    fontSize: 15,
  },
  input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    marginBottom: 15,
  },
});

export default HomeScreen;
