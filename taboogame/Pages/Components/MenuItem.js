import React from 'react'
import { Text, View } from 'react-native'
import StyleSheet from '../../Sources/Styles/Components/MenuItemStyle'

const MenuItem = (props) => {
    return (
        <View style={StyleSheet.itemArea}>
            <Text style={StyleSheet.itemText}>{props.Title}</Text>
        </View>
    )
}

export default MenuItem;