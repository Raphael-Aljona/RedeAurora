import {Stack} from "expo-router";
import {ListagemItem} from "./app/listagem_item";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="login/index"
                options={{
                    title:"login",
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ListagemItem/index"
                options={{
                    title:"Listagem"

                }}
            />
        </Stack>
    )
}