
import React , {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal } from 'react-native';
import CustomButton from './Button'

const GoalInput = (prop) => {
    const [inputField, setInputField] = useState('');
    const goalInputHandler = goalEntered => setInputField(goalEntered)
    const addGoalFunction = (inputField) => {
        prop.addGoalHandler(inputField);
        goalInputHandler('');
    }
    return (
        <Modal visible={prop.visible}  animationType = "slide" >
            <View style = {styles.inputContainer}>
                <TextInput 
                    placeholder="Add your goal"
                    value = {inputField}
                    onChangeText = {goalInputHandler}
                    style = {styles.input}
                />
                <View style={styles.buttonContainer}>
                    <CustomButton
                        title= 'ADD'
                        buttonHandler = {()=>addGoalFunction(inputField)}
                        style = {styles.addButton}
                    />
                    <CustomButton
                        title= 'CANCEL'
                        buttonHandler = {()=> prop.setIsAddActive(false)}
                        style = {styles.cancelButton}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        margin:20,
      },
      input: {
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 20,
        margin: 10,
        borderRadius:10
      },
      buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent:'center',
      },
      addButton: {
        minWidth: 150,
      },
      cancelButton: {
        minWidth: 150,
      }
})

export default GoalInput;