import React from "react";
import { View, Text } from "react-native";

export default function NoteCard({ note }) {
  return (
    <View
      style={{ padding: 10, backgroundColor: note.color || "#eee", margin: 5 }}
    >
      <Text style={{ fontWeight: "bold" }}>{note.title}</Text>
      <Text>{note.content}</Text>
    </View>
  );
}
