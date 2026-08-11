import {Stack} from "expo-router";
import {
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    useFonts
} from "@expo-google-fonts/montserrat";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

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
        <SafeAreaProvider>
            <Stack>
                <Stack.Screen
                    name="login/index"
                    options={{
                        title: "login",
                        headerShown: false,
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
    );
}