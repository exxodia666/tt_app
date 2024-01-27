import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreatePostScreen, HomeScreen, ItemScreen } from '../../../screens';
import { Routes } from './routes';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Routes.main}
                component={HomeScreen}
                options={({ route }) => ({
                    title: 'Posts'
                })}
            />
            <Stack.Screen
                name={Routes.post}
                component={ItemScreen}
                options={({ route }) => ({
                    title: route?.params?.title,
                })}
            />
            <Stack.Screen
                name={Routes.create_post}
                component={CreatePostScreen}
                options={({ route }) => ({
                    title: 'Create Post'
                })}
            />
        </Stack.Navigator>
    );
}