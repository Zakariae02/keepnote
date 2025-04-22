import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { api } from "../../utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = async () => {
    const token = await AsyncStorage.getItem("token");
    await api.post(
      "/notes",
      { title, content },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    router.push("/notes");
  };

  return (
    <View>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}
