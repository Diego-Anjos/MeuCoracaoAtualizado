// Arquivo: app/(tabs)/index.tsx
import { Redirect } from "expo-router";

export default function HomeScreen() {
  // Redirecionar para explore
  return <Redirect href="/(tabs)/explore" />;
}
