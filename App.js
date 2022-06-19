import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/Home';
import PlanoBasicoScreen from './pages/PlanoBasico';
import PlanoFamiliaScreen from './pages/PlanoFamilia';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="basico"
          component={PlanoBasicoScreen}
          options={{ title: 'Welcome' }}
        />
         <Stack.Screen
          name="familia"
          component={PlanoFamiliaScreen}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;