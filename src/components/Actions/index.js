import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';

import {AntDesign} from '@expo/vector-icons'

export default function Actions() {
 return (
<ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
    <TouchableOpacity style={styles.actionbtn}>
        <View style={styles.areaebtn}>
            <AntDesign name='addfolder' size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelbtn}>Entradas</Text>
    </TouchableOpacity>

        <TouchableOpacity style={styles.actionbtn}>
        <View style={styles.areaebtn}>
            <AntDesign name='tagso' size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelbtn}>Compras</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionbtn}>
        <View style={styles.areaebtn}>
            <AntDesign name='creditcard' size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelbtn}>Carteira</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionbtn}>
        <View style={styles.areaebtn}>
            <AntDesign name='barcode' size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelbtn}>Boletos</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionbtn}>
        <View style={styles.areaebtn}>
            <AntDesign name='setting' size={26} color={'#000'}/>
        </View>
        <Text style={styles.labelbtn}>Conta</Text>
    </TouchableOpacity>
</ScrollView>
    );
}


const styles = StyleSheet.create({
container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop:18,
    paddingEnd: 14,
    paddingStart: 14
},
actionbtn:{
    alignItems: 'center',
    marginRight: 32,
},
areaebtn:{
    backgroundColor: '#ecf0f1',
    height: 50,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
},
labelbtn:{
    marginTop: 4,
    textAlign: 'center',
    fontWeight:'bold',
}
})