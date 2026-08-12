import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="login/index"
                options={{
                    title: "login",
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="CriarItem/index"
                options={{
                    title: "Criar Item"
                }}
            />
        </Stack>
    )
}