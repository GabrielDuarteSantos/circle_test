import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        backgroundColor: '#000',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    surface: {
        flexGrow: 1
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 10
    },
    button: {
        borderWidth: 2,
        borderColor: '#800080',
        borderRadius: 5,
        paddingVertical: 4,
        width: '30%',
    },
    text: {
        color: '#800080',
        textAlign: 'center',
        fontSize: 20,
    }
});