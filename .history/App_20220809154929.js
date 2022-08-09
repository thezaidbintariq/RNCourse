import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react';


export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  
  
  const HandleInput = (text) => {
    console.log(text);
    setEnteredGoal(text);
  }
  const addGoalHandler = () => {
    console.log(enteredGoal);
  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter your name" onChangeText={HandleInput} />
        <Button title="Enter Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer : {
   paddingTop: 50,
   paddingHorizontal: 16,
   flex: 1
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 2,
    borderColor: '#ccc',
    flex: 1
  },
  input: {
    width: '70%',
    borderColor: '#cccccc',
    borderWidth: 2,
    padding: 8,
    marginRight: 8
  },
  goalsContainer: {
    flex: 5

  }
}
);
