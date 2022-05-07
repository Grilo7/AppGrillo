import {FlatList, StyleSheet, Text, View} from 'react-native'

import React from 'react'
import TodoItem from './TodoItem';
import { colors } from '../../Styles/Colors'

const Lista = ({todoList, handleModal}) => {

    const renderTodo = ({item}) => <TodoItem onPress={handleModal} todo={item}></TodoItem>
    
    return (
    <View style= {styles.ItemList}>
    {/* <Item Item = {{id: 1, todo:"Estudiar React Native"} }></Item> */
    /* <Item Item = {{id: 2, todo:"Levantarme temprano"} }></Item>
    <Item Item = {{id: 3, todo:"Hacer ejercicio"} }></Item>
    <Item Item = {{id: 4, todo:"Jugar con Beltrán"} }></Item>} */}
    {todoList.length !== 0?
    <FlatList
        data = {todoList}
        keyExtractor = {todo => todo.id}
        renderItem = {renderTodo}
    />
    :
    <Text>There is no todo</Text>
    }
    </View>
    )
}

export default Lista

const styles = StyleSheet.create({
    ItemList: {
        backgroundColor: colors.verdeOscuro,
        width: '95%',
        padding: 20,
        fontSize: 18,
        flex: 0.8,
    },
})