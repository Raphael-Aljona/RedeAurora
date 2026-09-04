import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { Fonts } from '../../constants/theme'
import { useAuth } from '../../contexts/AuthContext';
import { useRecuperarSenha } from '../../hooks/useRecuperarSenha';
import { api } from '../../services/api';
import { Usuario, UsuarioAtualizar } from '../../@types/Usuario';
import { router } from 'expo-router';

function Recuperar() {

    const[email, setEmail] = useState('');
    const[senha1, setSenha1] = useState('');
    const[senha2, setSenha2] = useState('');

    const {usuarios, getUsuario} = useRecuperarSenha()

    useEffect(() => {
    getUsuario();
    }, [getUsuario]);
    
    

    async function Redefinir() {
        if (senha1 != senha2){
            alert("Suas senhas não estao iguis")
            return
        }
            try{
                const UsuarioEscolhido = usuarios.find(u => u.email === email)

                if (!UsuarioEscolhido) return alert("email não encontrado")
                
                const usuarioRedefinicao: UsuarioAtualizar = {
                    nome: UsuarioEscolhido.nome,
                    email: UsuarioEscolhido.email,
                    senha: senha1
                }
                
                await api.put(`/Usuario/${UsuarioEscolhido?.id}`, usuarioRedefinicao)

                router.push("/login")
            }catch{
                alert("erro na atualizacao da senha");
            }
        




    }

  return (
    <View style={estilos.main}>
                <View style={estilos.container}>
                    <Text style={estilos.titulo}>Redefinir senha</Text>
                    <Text style={estilos.subtitulo}>Redefina sua senha para acesse sua conta e gerenciar ativos</Text>
    
                    <Text style={estilos.label}>E-mail</Text>
                    <TextInput 
                        placeholder="Digite seu e-mail" 
                        value={email}
                        onChangeText={setEmail}
                        style={estilos.input} 
                    />
                    
                    <Text style={estilos.label}>Nova senha</Text>
                    <TextInput 
                        placeholder="Digite sua nova senha" 
                        value={senha1}
                        onChangeText={setSenha1}
                        secureTextEntry={true} 
                        style={estilos.input}
                    />
                    <TextInput 
                        placeholder="Digite sua Senha novamente" 
                        value={senha2}
                        onChangeText={setSenha2}
                        secureTextEntry={true} 
                        style={estilos.input}
                    />
                    
                    <Pressable  onPress={Redefinir} style={estilos.botao}>
                        <Text style={estilos.texto}>Redefinir Senha</Text>
                    </Pressable>
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

export default Recuperar