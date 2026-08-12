import {View, Text, TextInput, StyleSheet} from "react-native";
import AuroraButton from "../../components/aurora_button/aurora_button";
import {useRouter} from "expo-router";
import React from "react";

export default function Login(){
    const router = useRouter();

    function acessar() {
        router.push("/listagem_item")
    }

    return (
        <View style={estilos.main}> {/* Adiciona o estilo 'main' ao View pai */}
            <View style={estilos.container}>
                <Text style={estilos.titulo}>Login</Text>
                <Text style={estilos.subtitulo}>Acesse sua conta para gerenciar ativos</Text>
                
                <Text style={estilos.label}>E-mail</Text>
                <TextInput 
                    placeholder="Digite seu e-mail" 
                    style={estilos.input} 
                />
                
                <Text style={estilos.label}>Senha</Text>
                <TextInput 
                    placeholder="Digite sua Senha" 
                    secureTextEntry={true} 
                    style={estilos.input}
                />
                
                <AuroraButton text="Pressione" onPress={acessar} />
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    main: {
        flex: 1, // Ocupa toda a altura da tela
        justifyContent: 'center', 
        alignItems: 'center', // Centraliza horizontalmente e verticalmente
        backgroundColor: "#FFF8F6"
    },
    container: {
        width: "80%", // Aumentei para 80% para ficar mais visível, ou use 'auto' com maxWidth
        maxWidth: 400, // Opcional: limita a largura máxima
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: "#F06A22",
        padding: 20,
        borderRadius: 10, // Opcional: arredonda as bordas
    },
    input: {
        width: "100%", // Faz o input ocupar a largura do container
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 12,
        borderRadius: 5,
        marginBottom: 15,
        marginTop: 5
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#F06A22"
    },
    subtitulo: {
        fontSize: 14,
        color: "#666",
        marginBottom: 20,
        textAlign: 'center'
    },
    label: {
        alignSelf: 'flex-start',
        marginLeft: 5,
        marginBottom: 5,
        fontWeight: '500'
    }
})