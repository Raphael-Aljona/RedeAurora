import { Stack } from "expo-router";
import {
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    useFonts
} from "@expo-google-fonts/montserrat";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import {Colors} from "../constants/theme";
import { AuthProvider } from "../contexts/AuthContext";

export default function RootLayout() {

    const [loaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    })

    if (!loaded) {
        return;
    }

    return (
        <AuthProvider>
        <SafeAreaProvider>
            <Stack initialRouteName="splash/index">
                <Stack.Screen name="splash/index"
                    options={{
                        title: "splash",
                        headerShown: false,
                    }} />
                <Stack.Screen
                    name="login/index"
                    options={{
                        title: "login",
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="listagem_item/[id]"
                    options={{
                        title: "Listagem",
                        headerShown: true,
                    }}
                />
                <Stack.Screen
                    name="detalhes_item/[id]"
                    options={{
                        title: "Detalhes",
                        headerShown: true,
                    }}
                />
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                    }}
                />

            </Stack>
        </SafeAreaProvider>
        </AuthProvider>
    );
}