import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import styles from './style';
import Circle from '../circle/circle';

export default function Game() {

    let [circles, setCircles] = useState({ 'current': [], 'removed': [] });

    function spawnCircle(event) {

        setCircles({
            'current': [...circles.current, [event.nativeEvent.locationX, event.nativeEvent.locationY]],
            'removed': [...circles.removed]
        });

    };

    function removeLastCircle() {

        if (!circles.current.length)
            return;

        circles.removed.push(circles.current.pop());

        setCircles({ 'current': [...circles.current], 'removed': [...circles.removed] });

    };

    function respawnLastCircle() {

        if (!circles.removed.length)
            return;

        circles.current.push(circles.removed.pop());

        setCircles({ 'current': [...circles.current], 'removed': [...circles.removed] });

    };

    function resetCircles() {

        setCircles({ 'current': [], 'removed': [] });

    };

    console.log('-- current', circles.current.length, '-- removed', circles.removed.length);

    return (
        <View style={styles.mainContainer}>
            <Pressable style={styles.surface} onPress={event => spawnCircle(event)}>
                {circles.current.map((circlePos, i) => <Circle key={i} position={circlePos}></Circle>)}
            </Pressable>
            <View style={styles.buttonsContainer}>
                <Pressable style={styles.button} onPress={removeLastCircle}>
                    <Text style={styles.text}>Desfazer</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={resetCircles}>
                    <Text style={styles.text}>X</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={respawnLastCircle}>
                    <Text style={styles.text}>Refazer</Text>
                </Pressable>
            </View>
        </View>
    );

};