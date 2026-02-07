import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Switch } from "react-native";

export default function App() {
  // packed value means true or false, setPacked is how you change answer
  const [packed1, setPacked1] = useState(false);

  return (

    <View style={styles.container}>
      {/* top title */}
      <Text style={styles.title}>Travel Bag Packer</Text>

      <ScrollView style={{ width: "90%" }}>
        {/* creating a section for each bag */}
        <View style={styles.sectionCarryOn}>
          <Text style={styles.sectionTitle}>Carry-On</Text>
          <Text>Passport</Text>
          {/* got some toggle help from https://stackoverflow.com/questions/72828609/how-toggle-works-in-react */}
            <Switch value={packed1} onValueChange={setPacked1}/>
          <Text>Toothbrush</Text>
          <Text>Charger</Text>
        </View>

        <View style={styles.sectionSuitcase}>
          <Text style={styles.sectionTitle}>Suitcase</Text>
          <Text>Jacket</Text>
          <Text>Jeans</Text>
          <Text>Shoes</Text>
        </View>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionCarryOn: {
    backgroundColor: "#f7b6c2",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    width: "90%", // had to look up how to get the % in there
  },
  sectionSuitcase: {
    backgroundColor: "#a8d5e2",
    padding: 20,
    borderRadius: 15,
    marginTop: 15,
    width: "90%",
  },

  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },
});