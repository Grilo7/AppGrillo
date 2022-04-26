import { Button, Touchable } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import ButtonCustom from '../Components/Button';
import Item from '../Components/Item';
import {TouchableOpacity} from 'react-native-web';
import { colors } from '../Styles/Colors';
import { useState } from 'react';

const Layout = ()=> {
    const [input, setInput] = useState("")
    return (
        <View style={styles.container}>
            <View style= {styles.topContainer}>
                <TextInput 
                style={styles.input}
                placeholder= "Add todo"
                onChangeText={setInput}
                value={input}
                /> 
                <ButtonCustom/>
                </View>
            <View style= {styles.ItemList}>
                <Item Item = {{id: 1, todo:"Estudiar React Native"} }></Item>
                <Item Item = {{id: 2, todo:"Levantarme temprano"} }></Item>
                <Item Item = {{id: 3, todo:"Hacer ejercicio"} }></Item>
                <Item Item = {{id: 4, todo:"Jugar con Beltrán"} }></Item>
            </View>
        </View>
    )
}

export default Layout;

const styles = StyleSheet.create ({
    container:{
        padding: 25,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItem: 'center',
    },
    topContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItem: 'center',
        padding: 8,
    },
    input: {
        borderRadius: 8,
        borderWidth: 1.5,
        width: 200,
        paddingHorizontal: 8,
        fontSize: 18,
        height: 35,
        backgroundColor: colors.amarilloClaro
    },
    ItemList: {
        backgroundColor: colors.verdeOscuro,
        width: '95%',
        padding: 20,
        fontSize: 18,
        
    },
    Button: {
        backgroundColor: colors.amarillo,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius:10,
        borderWidth: 0,

    }
})