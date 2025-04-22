import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { router } from "expo-router";
import { api } from "../../utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NoteCard from "../../components/NoteCard";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await api.get("/notes", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <View>
      <Button title="Add Note" onPress={() => router.push("/notes/create")} />
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NoteCard note={item} />}
      />
    </View>
  );
}
