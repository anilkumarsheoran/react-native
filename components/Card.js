import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 30,
        shadowColor: 'grey',
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        margin: 20,
        borderColor: 'black',
        borderWidth: 1,
        elevation: 8,
        borderRadius: 10,
        backgroundColor: 'white'
    }
})

export default Card;