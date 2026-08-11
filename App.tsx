import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    useFonts
} from "@expo-google-fonts/montserrat";
import Login from "./src/app/login";
import React from 'react';

export default function App() {


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
            <SafeAreaView style={{flex: 1}}>
                <Login/>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}