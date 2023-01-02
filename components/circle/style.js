import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    circle: {
        backgroundColor: '#800080',
        height: 50,
        width: 50,
        borderRadius: 25,
        position: 'absolute',
        transform: [
            { translateX: -25 },
            { translateY: -25 }
        ]
    }
})