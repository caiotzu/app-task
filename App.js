import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './src/Login';
import Registrar from './src/Registrar';
import Tasks from './src/Tarefas'
import user from './src/service/user'
import { HeaderStyles } from './src/styles/AppStyles'

const Stack = createStackNavigator()

// disable Navigation header => headerMode="none"
const App: () => React$Node = () => {
    const initialRoute = (user.id != '' ? "TaskList" : "Login")
    return (
    <>
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRoute}>  
                <Stack.Screen name="Login" 
                    component={Login} 
                    options={HeaderStyles.login} />

                <Stack.Screen name="Registrar" 
                    component={Registrar} 
                    options={HeaderStyles.registrar} />

                <Stack.Screen name="TaskList" 
                    component={Tasks} 
                    options={HeaderStyles.tarefas} />
                    
            </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}

export default App
