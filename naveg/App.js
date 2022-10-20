import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"



export default function app() {

  return (
    <View style={styles.container}>
      <Text>NAVEG FUNCIONANDO</Text>

      <FontAwesome
      name="home"
      size={25}
      color="#11118c"
      />

      <FontAwesome
      name="user"
      size={25}
      color="#54a300"
      />

      <Feather
      name="gift"
      size={25}
      color="#54a300"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

