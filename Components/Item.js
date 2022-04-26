import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { colors } from '../Styles/Colors'

const Item = ({Item}) => {
    return (
    <View style = {styles.ItemContainer}>
        <Text style= {styles.text}>{Item.todo}</Text>
    </View>
    )
}

export default Item

const styles = StyleSheet.create({
    ItemContainer: {
        backgroundColor: colors.verdeClaro,
        padding: 10,
        borderRadius: 10,

    },
    text: {
        color: colors.amarilloClaro

    }
})
