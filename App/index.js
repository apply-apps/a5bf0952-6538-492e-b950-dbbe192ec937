// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, FlatList, Text, TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Mock Data
const fairyTales = [
    { id: '1', title: 'Cinderella', imageUrl: 'https://picsum.photos/200/300?random=1' },
    { id: '2', title: 'Snow White', imageUrl: 'https://picsum.photos/200/300?random=2' },
    { id: '3', title: 'Hansel and Gretel', imageUrl: 'https://picsum.photos/200/300?random=3' },
];

// HomeScreen Component
const HomeScreen = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Detail', { tale: item })}
        >
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={fairyTales}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
};

// HomeScreen Styles
const styles = StyleSheet.create({
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
        padding: 10,
        marginVertical: 8,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

// DetailScreen Component
const DetailScreen = ({ route }) => {
    const { tale } = route.params;

    return (
        <SafeAreaView style={detailStyles.container}>
            <View style={detailStyles.box}>
                <Image source={{ uri: tale.imageUrl }} style={detailStyles.image} />
                <Text style={detailStyles.title}>{tale.title}</Text>
                <Text style={detailStyles.content}>Once upon a time, {tale.title}...</Text>
            </View>
        </SafeAreaView>
    );
};

// DetailScreen Styles
const detailStyles = StyleSheet.create({
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
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 10,
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

// App Component with Navigation
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