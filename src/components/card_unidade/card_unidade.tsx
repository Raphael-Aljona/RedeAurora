import {View, Text, StyleSheet} from "react-native";
import {Icon} from "expo-router/build/native-tabs";
import {Colors} from "../../constants/theme";

export default function CardUnidade (){
    return (
        <View style={styles.card}>
            <View>
                <Text>
                    Unidade Norte
                </Text>
                <Text>42 itens</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create(
    {
        card:{
            height: "30%",
            width: "100%",
            borderWidth: 1,
            borderColor: Colors.laranja_btn,
            borderRadius: 10,

        },
    }
)