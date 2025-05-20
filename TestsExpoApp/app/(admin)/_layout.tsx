import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: "Home" }} />
      <Stack.Screen name='about' options={{ title: "About me"}} />
      <Stack.Screen name='todos' options={{ title: "Todos"}} />
    </Stack>
  );
}
