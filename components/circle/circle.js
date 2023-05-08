import { Pressable } from "react-native";

import styles from './style';

export default function Circle(props) {

    let [xPos, yPos] = props.position;

    return (
        <Pressable 
            style={{...styles.circle, 'top': yPos, 'left': xPos}} 
            onLongPress={() => props.removeCircle(xPos, yPos)}>
        </Pressable>
    );

};