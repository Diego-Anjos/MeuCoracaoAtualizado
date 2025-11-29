import { useAuth } from '@/contexts/AuthContext';
import { Redirect } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

export default function Index() {
  const { token, loading, user } = useAuth();

  console.log('📍 INDEX.TSX - Estado:', { 
    hasToken: !!token, 
    hasUser: !!user,
    userName: user?.name,
    loading 
  });

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0F0F10' }}>
        <ActivityIndicator size="large" color="#FF4D5A" />
      </View>
    );
  }

  // Se não tiver token, redireciona para cadastro
  // Se tiver token, redireciona para explorar
  const redirectTo = token ? "/(tabs)/explore" : "/cadastro";
  console.log('🔀 Redirecionando para:', redirectTo);
  
  return <Redirect href={redirectTo} />;
}
