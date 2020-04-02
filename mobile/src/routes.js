import React from 'react'
import { NavigationContainer } from '@react-navigation/native' // Delimita nossas rotas de navegação
import { createStackNavigator } from '@react-navigation/stack' // Para criar rotas no estilo "Stack", links e botões

const AppStack = createStackNavigator()

import Incidents from './pages/Incidents'
import Detail from './pages/Detail'

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }} >
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}