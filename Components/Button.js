import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import React from 'react'
import { colors } from '../Styles/Colors'

const ButtonCustom = () => {
    return (
        <TouchableOpacity style= {styles.Button}>
            <Text>Add todo</Text>
        </TouchableOpacity>
    )
}

export default ButtonCustom

const styles = StyleSheet.create({
  Button: {
    backgroundColor: colors.amarillo,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius:10,
    borderWidth: 0,

  },
})
