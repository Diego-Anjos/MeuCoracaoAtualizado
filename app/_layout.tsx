// app/_layout.tsx
import { AgendaProvider } from '@/contexts/AgendaContext';
import { AlergiaProvider } from '@/contexts/AlergiaContext';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { LaudoProvider } from '@/contexts/LaudoContext';
import { RemedioProvider } from '@/contexts/RemedioContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from 'react-native';
import 'react-native-reanimated';

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { token, loading, user } = useAuth();

  console.log('🔄 RootLayoutNav - Renderizando...');
  console.log('🔑 Token presente:', token ? 'SIM' : 'NÃO');
  console.log('👤 Usuário:', user ? user.name : 'Nenhum');
  console.log('⏳ Loading:', loading);

  if (loading) {
    console.log('⏳ Mostrando tela de loading...');
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <ActivityIndicator size="large" color="#DC2626" />
      </View>
    );
  }

  return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="login" />
          <Stack.Screen name="cadastro" />
          <Stack.Screen name="agenda" />
          <Stack.Screen name="agenda-adicionar" />
          <Stack.Screen name="agenda-editar" />
          <Stack.Screen name="laudos" />
          <Stack.Screen name="laudos-adicionar" />
          <Stack.Screen name="laudos-editar" />
          <Stack.Screen name="emocional" />
          <Stack.Screen name="remedios" />
          <Stack.Screen name="remedios-adicionar" />
          <Stack.Screen name="remedios-editar" />
          <Stack.Screen name="alergias" />
          <Stack.Screen name="alergias-adicionar" />
          <Stack.Screen name="alergias-editar" />
          <Stack.Screen name="dados" />
        </Stack>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <AgendaProvider>
        <LaudoProvider>
          <RemedioProvider>
            <AlergiaProvider>
              <RootLayoutNav />
            </AlergiaProvider>
          </RemedioProvider>
        </LaudoProvider>
      </AgendaProvider>
    </AuthProvider>
  );
}
