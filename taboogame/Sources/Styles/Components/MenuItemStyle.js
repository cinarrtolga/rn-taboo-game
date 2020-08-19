import { StyleSheet, Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('screen').width;

export default StyleSheet.create({
    itemArea: {
        width: (SCREEN_WIDTH / 3) * 2,
        height: 70,
        alignSelf: "center",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#dddddd',
        marginTop: 15
    },
    itemText: {
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
        paddingBottom: 2,
        fontSize: 16,
        color: 'white'
    }
});