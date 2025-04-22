import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { api } from "../utils/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await api.post("/login", { email, password });
    await AsyncStorage.setItem("token", res.data.token);
    router.replace("/notes");
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput onChangeText={setEmail} value={email} />
      <Text>Password</Text>
      <TextInput secureTextEntry onChangeText={setPassword} value={password} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
