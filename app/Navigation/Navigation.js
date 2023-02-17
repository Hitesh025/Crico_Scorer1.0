import React, { useEffect, useState } from 'react';
import Login from '../Screens/Login';
import PlayerDetails from '../Screens/PlayerDetails';
import PlayerSelection from '../Screens/PlayerSelection';
import ScoreCard from '../Screens/ScoreCard';
import TeamDetails from '../Screens/TeamDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Login} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="PlayerDetails" component={PlayerDetails} />
                <Stack.Screen name="PlayerSelection" component={PlayerSelection} />
                <Stack.Screen name="ScoreCard" component={ScoreCard} />
                <Stack.Screen name="TeamDetails" component={TeamDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );

};
export default Navigation;