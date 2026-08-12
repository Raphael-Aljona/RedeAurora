import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Footer() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.tabItem}>
                <Ionicons name="clipboard-outline" size={24} color="#0085B2" />
                <Text style={[styles.label, styles.labelActive]}>Minhas OS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem}>
                <Ionicons name="add-circle-outline" size={24} color="#6B7280" />
                <Text style={styles.label}>Criar OS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem}>
                <Ionicons name="notifications-outline" size={24} color="#6B7280" />
                <Text style={styles.label}>Notificações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem}>
                <Ionicons name="person-outline" size={24} color="#6B7280" />
                <Text style={styles.label}>Perfil</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: 65,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        paddingBottom: 5,
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },
    label: {
        fontSize: 12,
        fontWeight: '500',
        color: '#6B7280',
    },
    labelActive: {
        color: '#0085B2',
        fontWeight: '600',
    },
});