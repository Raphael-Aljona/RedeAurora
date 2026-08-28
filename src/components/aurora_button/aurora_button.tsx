import {Pressable, StyleSheet, Text} from "react-native";
import {ButtonText, Colors} from "../../constants/theme";

type ButtonProps = {
    onPress: () => void;
    text: string;
};

export default function AuroraButton({onPress, text}: ButtonProps) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.button_text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 20,
        marginTop: "5%",
        backgroundColor: Colors.laranja_btn,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },

    button_text:{
        ...ButtonText,
    }
})