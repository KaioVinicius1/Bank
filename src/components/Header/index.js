import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

import {Feather} from '@expo/vector-icons'

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64; 

export default function Header({name}) {
 return (
   
   <View style={styles.container}>
        <View style={styles.content}>

            <Text style={styles.user}> {name} </Text>
            
            <TouchableOpacity activeOpacity={0.9} style={styles.ButtonUser}> 
                <Feather name='user' size={27} color='white'></Feather>
            </TouchableOpacity>

        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f1aa4d',
      paddingTop: StatusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 16
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    user: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    ButtonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    }
  });