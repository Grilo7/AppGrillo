import {StyleSheet, View} from 'react-native';

import CustomModal from '../Components/Modal';
import Header from '../Components/Header';
import Lista from '../Components/Lista';
import { useState } from 'react';

const Layout = () => {
    
    
    const [todoList, setTodoList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [todoSelected, setTodoSelected] = useState({});

    const handleAdd = (input) => {
        {
            setTodoList([...todoList, {id: Date.now(), todo: input}]);
        }
    }
    const handleModal = (todoSelected) => {
        setModalVisible(true);
        setTodoSelected(todoSelected);
    }

    const handleDelete = () => {
        const todosFiltrados = todoList.filter(item => item !== todoSelected);
        setTodoList(todosFiltrados);
        setModalVisible(false);
    }

    const handleEdit = (Text) => {
        const todoToEdit = todoList.find(todo => todo.id === todoSelected.id);
        //const todoListFiltered = todoList.filter (todo => todo.id !== todoSelected);
        todoToEdit.todo = Text
        const todoAux = []
        todoList.forEach((item) => {
            todoAux.push(item)
        })
        setTodoList(todoAux)
    }
    

    return (
        <View style={styles.container}>
            <Header handleAdd={handleAdd}/> 
            <Lista handleModal={handleModal} todoList={todoList}/>
            <CustomModal
                modalVisible = {modalVisible}
                setModalVisible={setModalVisible}
                handleEdit = {handleEdit}
                handleDelete = {handleDelete}
                todoSelected = {todoSelected}
            />
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
        height: '100%',
    },
})