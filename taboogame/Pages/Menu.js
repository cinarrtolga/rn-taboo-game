import React from 'react'
import { View, Image, Text } from 'react-native'
import MenuItem from './Components/MenuItem'
import StyleSheet from '../Sources/Styles/MenuStyle'
import LinearGradient from 'react-native-linear-gradient';

const Menu = () => {
    return (
        <View style={StyleSheet.menuArea}>
            <LinearGradient colors={['#3074ff', '#3074ff', '#43D4FF']} style={StyleSheet.gradientArea}>
                <View style={StyleSheet.applicationLogoArea}>
                    <Image
                        source={require('../Sources/Images/appLogo.png')}
                        style={StyleSheet.applicationLogo}
                    />
                </View>
                <View style={StyleSheet.menuItems}>
                    <MenuItem Title='Multiplayer' />
                    <MenuItem Title='Training' />
                    <MenuItem Title='Settings' />
                </View>
                <View style={StyleSheet.mainFooter}>
                    <Text style={StyleSheet.mainFooterText}>Cinarr Solutions 2020</Text>
                </View>
            </LinearGradient>
        </View>
    );
}

export default Menu;