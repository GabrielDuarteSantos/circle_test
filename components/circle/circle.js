import { View } from "react-native";

import styles from './style';

export default function Circle(props) {

    let [xPos, yPos] = props.position;

    return (
        <View style={{...styles.circle, 'top': yPos, 'left': xPos}}></View>
    );

};