
import { Fonts } from "../../constants/theme";
import {View, Text, TextInput, StyleSheet, Alert, Pressable} from "react-native";
import AuroraButton from "../../components/aurora_button/aurora_button";
import {useRouter} from "expo-router";
import React, { useState } from 'react';
import { auth } from "../../services/autenticacao";
import { dados } from "../../@types/autenticacao";

export default function Login() {
    const router = useRouter();

    function acessar() {
        router.push("/(tabs)/dashboard")
    }
    function recuperarSenha() {
        router.push("/recuperar_senha")
    }
    function criarConta() {
        router.push("/criar_conta")
    } // function so pra trocar de tela

    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState(''); // estados para armazenar os valores 
    const [loading, setLoading] = useState(false); //testando isso aqui ainda 
    
    async function Autenticar() {

         const dado : dados = {
            email: email,
            senha: senha
         }
         
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }
    // setLoading(true);
    try {
        
      await auth(dado);
      
      // Toast nativo / Alerta
      Alert.alert("Sucesso", "Login realizado com sucesso!");
      
      // Redireciona para a tela principal
      acessar();
    } catch (error)  {
      Alert.alert("Erro", "E-mail ou senha inválidos.");
    } finally {
    //   setLoading(false);
    }
  }

  //acho que tem mexer no catch(error)

//testando umas coisa ai    

    return (
        <View style={estilos.main}>
            <View style={estilos.container}>
                <Text style={estilos.titulo}>Login</Text>
                <Text style={estilos.subtitulo}>Acesse sua conta para gerenciar ativos</Text>

                <Text style={estilos.label}>E-mail</Text>
                <TextInput 
                    placeholder="Digite seu e-mail" 
                    value={email}
                    onChangeText={setEmail}
                    style={estilos.input} 
                />
                
                <Text style={estilos.label}>Senha</Text>
                <TextInput 
                    placeholder="Digite sua Senha" 
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true} 
                    style={estilos.input}
                />
                
                <Pressable  onPress={Autenticar} style={estilos.botao}>
                    <Text style={estilos.texto}>Entrar</Text>
                </Pressable>
                <Text style={estilos.recuperarSenha}>Recuperar minha senha</Text>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFF8F6"
    },
    container: {
        width: "80%",
        maxWidth: 400,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: "#F06A22",
        padding: 20,
        borderRadius: 10,
    },
    input: {
        width: "100%",
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
    },
    recuperarSenha: {
        color: "#F06A22"
    },
    botao: {
        padding: 20,
        marginTop: "5%",
        marginBottom: "5%",
        backgroundColor: "#F06A22",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        width: '75%',
        height: '14%'
    },
    texto: {
        fontSize: 15,
        fontFamily: Fonts.semiBold,
        color: '#FFF',
    }
})