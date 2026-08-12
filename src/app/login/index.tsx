import {View} from "react-native";
import AuroraButton from "../../components/aurora_button/aurora_button";
import {useRouter} from "expo-router";


export default function Login() {

    const router = useRouter();

    function acessar() {
        router.push("/listagem_item")
    }

    return (
        <View>
            <AuroraButton text="Pressione" onPress={() => {
            }}/>
        </View>
    )
}