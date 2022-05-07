import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import React from 'react'
import { colors } from '../Styles/Colors'

const ButtonCustom = ({onPress}) => {
    return (
        <TouchableOpacity style= {styles.Button} onPress= {onPress}>
            <Text style= {styles.Text}>Add todo</Text>
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
  Text: {
    fontSize: 15,
    alignContent: 'center',
    color: colors.verdeOscuro,
  }
})
