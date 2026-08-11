import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {SafeAreaView} from "react-native-safe-area-context";

export default function TabsLayout() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: "#0878F9",
                    tabBarInactiveTintColor: "#6B7280",
                }}
            >
                <Tabs.Screen
                    name="listagemItem/index"
                    options={{
                        title: "Dashboard",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="list-outline"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="exportar_itens/index"
                    options={{
                        title: "Listagem",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="add-circle-outline"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="detalhes_item/index"
                    options={{
                        title: "Detalhes",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="notifications-outline"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="criar_item/index"
                    options={{
                        title: "Adicionar",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="person-outline"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
            </Tabs>
        </SafeAreaView>
    )
}