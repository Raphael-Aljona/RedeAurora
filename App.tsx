import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {ListagemItem} from "./src/app/listagem_item";
import {
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    useFonts
} from "@expo-google-fonts/montserrat";

export default function App() {


    const [loaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    })

    if(!loaded) {
        return;
    }


    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                <ListagemItem></ListagemItem>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}