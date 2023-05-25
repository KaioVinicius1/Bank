import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import Header from '../../components/header'
import Balance from '../../components/Balance'
import Movements from '../../components/Movements'
import Actions from '../../components/Actions';

const list = [{
    id: 1,
    label: "Boleto",
    value: "100",
    date:"17/08/2023",
    type: 0
},
{
    id: 2,
    label: "Boleto",
    value: "100",
    date: "17/08/2023",
    type: 0
},
{
    id: 3,
    label: "Ted",
    value: "50",
    date: "27/08/2023",
    type: 1
},{
    id: 4,
    label: "Pix",
    value: "100",
    date:"12/08/2023",
    type: 1
},
]

export default function Home() {
 return (
  
    <View style={styles.container}>
        <Header name="Kaio Vinícius"/>
        <Balance saldo="1,300" gasto="-500"/>
        <Actions/>
        <Text style={styles.title}>Últimas Movimentações</Text>

        <FlatList style={styles.lista} data={list} 
        keyExtractor={(item) => String(item.id)}
        renderItem={ ({item}) => <Movements data={item}/>}
        showsVerticalScrollIndicator={false}/>

        
    </View>


  );
}

const styles = StyleSheet.create({
container: {
      backgroundColor: '#fafafa',
      flex: 1
    },
title:{
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14
    },
lista:{
    marginStart: 14,
    marginEnd: 14
},
  });