import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { colors } from '../../Styles/Colors'

const TodoItem = ({todo, onPress}) => {
    return (
    <View style = {styles.ItemContainer}>
        <TouchableOpacity onPress={()=>onPress(todo)}>
        <Text style= {styles.text}>{todo.todo}</Text>
        </TouchableOpacity>
    </View>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    ItemContainer: {
        backgroundColor: colors.verdeClaro,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,

    },
    text: {
        color: colors.amarilloClaro,
        fontSize: 15,

    }
})
