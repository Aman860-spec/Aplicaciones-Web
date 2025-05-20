import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View>
            <Text>Hello World!</Text>
            <Link href={'/about'}>About me</Link>
            <Text> Buenas </Text>
            <Link href={'./todos'}>Todos</Link>
        </View>
    )
}