// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const fairyTales = [
    { id: '1', title: 'Cinderella' },
    { id: '2', title: 'Snow White' },
    { id: '3', title: 'Hansel and Gretel' },
];

const HomeScreen = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={stylesHomeScreen.item}
            onPress={() => navigation.navigate('Detail', { tale: item })}
        >
            <Text style={stylesHomeScreen.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={stylesHomeScreen.container}>
            <FlatList
                data={fairyTales}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={stylesHomeScreen.list}
            />
        </SafeAreaView>
    );
};

const DetailScreen = ({ route }) => {
    const { tale } = route.params;

    return (
        <SafeAreaView style={stylesDetailScreen.container}>
            <View style={stylesDetailScreen.box}>
                <Text style={stylesDetailScreen.title}>{tale.title}</Text>
                <Text style={stylesDetailScreen.content}>Once upon a time, {tale.title}...</Text>
            </View>
        </SafeAreaView>
    );
};

const stylesHomeScreen = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginHorizontal: 20,
    },
    list: {
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

const stylesDetailScreen = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    box: {
        padding: 20,
        margin: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
        width: '90%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
    },
});

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Fairy Tales' }} />
                <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Story Details' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}