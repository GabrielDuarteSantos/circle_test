import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Game from './components/game/game';

export default function App() {
    return (
        <View>
            <StatusBar style="auto" />
            <Game />
        </View>
    );
}
