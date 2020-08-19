import { StyleSheet, Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

export default StyleSheet.create({
    menuArea: {
        flex: 1
    },
    gradientArea: {
        flex: 1,
        justifyContent: "center",
        paddingBottom: SCREEN_HEIGHT / 10
    },
    applicationLogoArea: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 5,
        marginBottom: SCREEN_HEIGHT / 20,
        justifyContent: "center",
        alignItems: "center"
    },
    applicationLogo: {
        marginTop: 15,
        marginBottom: 15,
        width: 250,
        height: 150
    },
    menuItems: {
        paddingBottom: 15
    },
    mainFooter: {
        position: 'absolute', 
        left: 0, 
        right: 0, 
        bottom: 0
    },
    mainFooterText: {
        marginBottom: SCREEN_HEIGHT / 20,
        textAlign: "center",
        fontSize: 14,
        color: '#ffffff'
    }
});