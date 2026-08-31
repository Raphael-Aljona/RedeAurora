import {Image, Pressable, StyleSheet, Text, View} from "react-native"
import React, { useEffect, useState } from 'react';
import { BuscarItem } from "../../services/Lista_service";
import axios from 'axios';
import {ItemSetor} from "../../@types/setor";
import {useRouter} from "expo-router";
type CardProps = {
    item: ItemSetor;
}

function Card({item}:CardProps) {

    const router = useRouter();

    function navegarDetalhes(){
        router.push(`/detalhes_item/${item.id_item}`)
    }

  return (
      <Pressable onPress={navegarDetalhes}>
          <View style={estilos.ViewCard}>
              <View style={estilos.ViewSuperior}>
                  <Image source={require('../../../assets/imgs/Background.png')} style={estilos.ImagemViewSuperior}/>
                  <View style={estilos.ViewTextoViewSuperior}><Text style={estilos.TextoViewSuperior}>{item.codigo_patrimonio}</Text></View>
              </View>
              <Text style={estilos.TextoPrincipal}>{item.nome_item}</Text>
              <View style={estilos.ViewSubtexto}>
                  <Image source={require('../../../assets/imgs/Container (1).png')} style={estilos.ImagemSubtexto}/>
                  <Text style={estilos.Subtexto}>Equipamentos de TI</Text>
              </View>
              <View style={estilos.ViewInferior}>
                  <Text style={estilos.TextoViewInferior}>VER DETALHES</Text>
                  <Image source={require('../../../assets/imgs/Container (2).png')} style={estilos.ImagemViewInferior}/>
              </View>
          </View>
      </Pressable>

  )
}

const estilos = StyleSheet.create({
    ViewCard:{
        width: 350,
        height: 210,
        padding: 24,
        backgroundColor: "white",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        borderRadius: 12,
        marginBottom: 24
    },

    ViewSuperior:{
        flexDirection: "row",
        width: 300,
        height: 40,
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 4
    },

    ImagemViewSuperior:{
        width: 40,
        height: 40,
    },

    ViewTextoViewSuperior:{
        width: 113,
        height: 24,
        backgroundColor: "rgba(231, 232, 233, 1)",
        justifyContent : "center",
        alignItems: "center",
        borderRadius: 10
    },

    TextoViewSuperior:{
        color: "black",
        fontSize: 12,
        fontWeight: "semibold"
    },

    TextoPrincipal:{
       fontSize: 20,
       fontWeight: "semibold" 
    },

    ViewSubtexto:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 24
    },

    ImagemSubtexto:{
        width: 11,
        height: 11
    },

    Subtexto:{
        marginLeft: 8,
        fontSize: 16

    },

    ViewInferior:{
        flexDirection: "row",
        width: 300,
        height: 40,
        justifyContent: "flex-end",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "rgba(225, 227, 228, 1)",
        paddingTop: 25

    },

    TextoViewInferior:{
        color: "rgba(230, 126, 34, 1)",
        fontSize: 12,
        fontWeight: "semibold"
    },

    ImagemViewInferior:{
        marginLeft: 4,
        marginTop: 3
    }
    
})

export default Card