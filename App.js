import { StatusBar } from 'expo-status-bar';
  import React , {useState} from 'react';
  import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
  import GoalInput from './components/GoalInput';
  import GoalItem from './components/GoalItem';
  import Header from './components/Header';
  import Card from './components/Card';

export default function App() {
  
  const [goalArray, setGoalArray] = useState([]);
  const [ isAddActive, setIsAddActive ] = useState(false);
  const addGoalHandler = (currentGoal) => {
    setGoalArray((goalState)=> [...goalState, {id: Math.random().toString(), value: currentGoal}]);
    setIsAddActive(false);
  }
  const removeGoalHandler = goalId => {
    setGoalArray(goalState => {
      return goalArray.filter((currentGoal) => currentGoal.id !== goalId )
    } )
  }
  
  return (
    <View style={styles.container}>
      <Header />
      <Card>
        <Button title="Add Goal" onPress={() => setIsAddActive(true)} />
      </Card> 
      <GoalInput visible={isAddActive} addGoalHandler={addGoalHandler} setIsAddActive={setIsAddActive} />
      <FlatList 
        style = {styles.goalList}
        keyExtractor={(item, index) => index.toString()}
        data={goalArray}
        renderItem={itemData =>(
          <GoalItem
            id = { itemData.item.id }
            removeGoalHandler = { removeGoalHandler }
            title = { itemData.item.value }
          />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue'
  },
  goalList: {
    backgroundColor: 'white'
  }
 
});
