
import React , {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

const GoalItem = (prop) => {
    return (
        <TouchableOpacity onPress={() => prop.removeGoalHandler(prop.id)} >
             <View style={styles.goalItem} key={prop.id}>
                <Text >{prop.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    goalItem: {
      margin: 20,
      padding: 20,
      marginVertical: 10,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 10,
    },
   
  });

export default GoalItem;