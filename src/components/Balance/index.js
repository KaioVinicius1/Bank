import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';

export default function Balance({saldo, gasto}) {
 return (
   <View style={styles.container}>

        <View style={styles.item}>
            <Text style={styles.Title}> Saldo </Text>

            <View style={styles.content}>
                <Text style={styles.Symbol}>R$</Text>
                <Text style={styles.balance}>{saldo}</Text>
            </View>
        </View>

        <View style={styles.item}>
            <Text style={styles.Title}> Gastos </Text>

            <View style={styles.content}>
                <Text style={styles.Symbol}>R$</Text>
                <Text style={styles.expense}>{gasto}</Text>
            </View>
        </View>

   </View>
  );
}


const styles = StyleSheet.create({
container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -8,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingBottom: 22,
    paddingTop: 22,
    zIndex: 99,
},
item:{

},
Title:{
    fontSize: 20,
    color: '#dadada',
},
content:{
    flexDirection: 'row',
    alignItems: 'center'
},
Symbol:{
    color: '#dadada', 
    marginRight: 6,

},
balance:{
    fontSize: 22,
    color: '#2ecc71'
},
expense:{
    fontSize: 22,
    color: '#e74c3c'
}
})