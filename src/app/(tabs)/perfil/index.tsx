import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React, {useEffect, useState} from "react";
import {atualizarPerfil} from "../../../services/perfil_service";
import {Colors} from "../../../constants/theme";

type Usuario = {
    "nome": string,
    "email": string,
    "senha": string
}

export default function Perfil() {

    const [usuario, setUsuario] = useState<Usuario>({
        nome: "",
        senha: "",
        email: "",
    });

    async function atualizarUsuario() {
        console.log('Usuario pode ser nulo')
        if (usuario == null) return;
        console.log('Enviando para a API')

        atualizarPerfil(usuario, "");
    }

    return (
        <View style={styles.container}>
            <View style={styles.cima}>
                <Text style={styles.title}>Joao</Text>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>ATIVA</Text>
                </View>
            </View>

            <View style={styles.campos}>
                <View style={styles.usuario}>
                    <View style={styles.cima_campo}>
                        <Ionicons name="person" size={16} color="#8a8a8a"/>
                        <Text style={styles.label}>Usuario</Text>
                    </View>
                    <TextInput placeholder={"joao"} style={styles.input} value={usuario?.nome} onChangeText={
                        nome => {
                            setUsuario(usuario => usuario ? {...usuario, nome} : usuario);
                        }
                    }></TextInput>
                </View>
                <View style={styles.email}>
                    <View style={styles.cima_campo}>
                        <Ionicons name="mail" size={16} color="#8a8a8a"/>
                        <Text style={styles.label}>E-mail</Text>
                    </View>
                    <TextInput placeholder={"joao@gmail"} style={styles.input} value={usuario?.email}
                               onChangeText={email => setUsuario(usuario => usuario ? {
                                   ...usuario,
                                   email
                               } : usuario)}></TextInput>

                </View>
                <View style={styles.senha}>
                    <View style={styles.cima_campo}>
                        <Ionicons name="lock-closed" size={16} color="#8a8a8a"/>
                        <Text style={styles.label}>Senha</Text>
                    </View>
                    <TextInput placeholder={"********"} style={styles.input} secureTextEntry
                               onChangeText={senha => setUsuario(usuario => usuario ? {
                                   ...usuario,
                                   senha
                               } : usuario)}></TextInput>
                </View>
            </View>

            <Pressable style={styles.button_editar} onPress={atualizarUsuario}>
                <Ionicons name="pencil" size={16} color="#3a2e2e" style={styles.buttonIcon}/>
                <Text style={styles.button_text_editar}>Editar Perfil</Text>
            </Pressable>

            <Pressable style={styles.button_sair}>
                <Ionicons name="exit" size={18} color="#fff" style={styles.buttonIcon}/>
                <Text style={styles.button_text_sair}>Sair / Logout</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:
            Colors.backgroundColor,
        paddingHorizontal:
            20,
        paddingTop:
            40,
    }
    ,
    cima: {
        alignItems: "center",
        marginBottom:
            24,
    }
    ,
    title: {
        fontSize: 28,
        fontWeight:
            "bold",
        color:
            "#3a2e2e",
        marginBottom:
            10,
    }
    ,
    badge: {
        backgroundColor: "#f4c9bd",
        paddingHorizontal:
            16,
        paddingVertical:
            6,
        borderRadius:
            20,
    }
    ,
    badgeText: {
        color: "#a13d2b",
        fontWeight:
            "600",
        fontSize:
            12,
        letterSpacing:
            0.5,
    }
    ,
    campos: {
        gap: 16,
        marginBottom:
            24,
    }
    ,
    usuario: {
        backgroundColor: "#fff",
        borderRadius:
            16,
        padding:
            16,
        shadowColor:
            "#000",
        shadowOffset:
            {
                width: 0, height:
                    2
            }
        ,
        shadowOpacity: 0.05,
        shadowRadius:
            6,
        elevation:
            2,
    }
    ,
    email: {
        backgroundColor: "#fff",
        borderRadius:
            16,
        padding:
            16,
        shadowColor:
            "#000",
        shadowOffset:
            {
                width: 0, height:
                    2
            }
        ,
        shadowOpacity: 0.05,
        shadowRadius:
            6,
        elevation:
            2,
    }
    ,
    senha: {
        backgroundColor: "#fff",
        borderRadius:
            16,
        padding:
            16,
        shadowColor:
            "#000",
        shadowOffset:
            {
                width: 0, height:
                    2
            }
        ,
        shadowOpacity: 0.05,
        shadowRadius:
            6,
        elevation:
            2,
    }
    ,
    cima_campo: {
        flexDirection: "row",
        alignItems:
            "center",
        gap:
            8,
        marginBottom:
            8,
    }
    ,
    label: {
        color: "#8a8a8a",
        fontSize:
            13,
    }
    ,
    input: {
        fontSize: 16,
        color:
            "#3a2e2e",
        borderBottomWidth:
            1,
        borderBottomColor:
            "#e0d5d0",
        paddingBottom:
            8,
    }
    ,
    button_editar: {
        flexDirection: "row",
        justifyContent:
            "center",
        alignItems:
            "center",
        backgroundColor:
            "#fff",
        borderWidth:
            1.5,
        borderColor:
            "#e8b8ab",
        borderRadius:
            30,
        paddingVertical:
            14,
        marginBottom:
            14,
        gap:
            8,
    }
    ,
    button_text_editar: {
        color: "#3a2e2e",
        fontWeight:
            "600",
        fontSize:
            15,
    }
    ,
    button_sair: {
        flexDirection: "row",
        justifyContent:
            "center",
        alignItems:
            "center",
        backgroundColor:
            "#b8221f",
        borderRadius:
            30,
        paddingVertical:
            16,
        gap:
            8,
    }
    ,
    button_text_sair: {
        color: "#fff",
        fontWeight:
            "700",
        fontSize:
            16,
    }
    ,
    buttonIcon: {
        marginRight: 4,
    }
    ,
});