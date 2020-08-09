import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Goal Tracker</Text>
            <Text style={styles.headerSubtitle}>App to keep track of your goals</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 40,
        padding: 30,
        backgroundColor: 'blue',
        alignItems: 'center',
        textAlign: "center",
    },
    headerTitle: {
        fontSize: 26,
        color: 'white',
        fontWeight: 'bold',
    },
    headerSubtitle: {
        fontSize: 16,
    }
})

export default Header;