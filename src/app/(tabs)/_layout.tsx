import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {SafeAreaView} from "react-native-safe-area-context";
import {Colors} from "../../constants/theme";
import {
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    useFonts
} from "@expo-google-fonts/montserrat";


export default function TabsLayout() {


    const [loaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    })

    if (!loaded) {
        return;
    }


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
                    name="dashboard/index"
                    options={{
                        title: "Dashboard",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="home"
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
                        title: "Perfil",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="notifications-outline"
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