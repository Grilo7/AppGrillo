import { Button, Touchable } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Item from '../Components/Item';
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
                <Button title= "Add todo"/>
                </View>
            <View style= {styles.ItemList}>
                <Item Item = {{id: 1, todo:"Estudiar React Native"} }></Item>
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
        borderRadius: 2,
        width: 200,
        paddingHorizontal: 8,
        
    },
    ItemList: {
        backgroundColor: colors.verdeOscuro,
        width: '95%',
        padding: 20,
    }
})