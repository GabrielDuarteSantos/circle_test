import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import styles from './style';
import Circle from '../circle/circle';

let [circles, setCircles] = useState({ 'current': [], 'removed': [] });

function spawnCircle() {

    console.log('atual', circles.current.length);
    console.log('removidos', circles.removed.length);

    setCircles({ 'current': [...circles.current, 1], 'removed': [...circles.removed] });

};

function removeLastCircle() {

    console.log('atual', circles.current.length);
    console.log('removidos', circles.removed.length);

    if (!circles.current.length)
        return;

    circles.removed.push(circles.current.pop());

    setCircles({ 'current': [...circles.current], 'removed': [...circles.removed] });

};

function respawnLastCircle() {

    console.log('atual', circles.current.length);
    console.log('removidos', circles.removed.length);

    if (!circles.removed.length)
        return;

    circles.current.push(circles.removed.pop());

    setCircles({ 'current': [...circles.current], 'removed': [...circles.removed] });

};

export default function Game() {

    console.log('renderizando', circles.current.length);

    return (
        <View style={styles.mainContainer}>
            <Pressable style={styles.surface} onPress={spawnCircle}>
                {circles.current.map((circlePos, i) => <Circle key={i} position={circlePos}></Circle>)}
            </Pressable>
            <View style={styles.buttonsContainer}>
                <Pressable style={styles.button} onPress={removeLastCircle}>
                    <Text style={styles.text}>Desfazer</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={respawnLastCircle}>
                    <Text style={styles.text}>Refazer</Text>
                </Pressable>
            </View>
        </View>
    );

};