import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

const CustomButton = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={props.buttonHandler}>
                <Text style={{...styles.button, ...props.style}}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign: 'center'
    }
})

export default CustomButton;
