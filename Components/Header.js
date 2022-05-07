import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import ButtonCustom from './Button';
import {TextInput} from 'react-native-web';
import { colors } from '../Styles/Colors';

const Header = ({handleAdd}) => {

    const [input, setInput] = useState ("");

    const handleAddAux = () => {
        if (input !== ""){
            handleAdd(input)
            setInput("");
        }

    }

return (
    <View style= {styles.topContainer}>
        <TextInput 
        style = {styles.input}
        placeholder = "Add todo"
        onChangeText={setInput}
        value={input}
        /> 
        <ButtonCustom onPress={() => handleAddAux()}/>
    </View>
)
}

export default Header

const styles = StyleSheet.create({
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
        fontSize: 15,
        height: 35,
        backgroundColor: colors.amarilloClaro,
        color: colors.verdeOscuro,
    },
})