import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react';


export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  
  const HandleInput = (text) => {
    setEnteredGoal(text);
  }
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter your name" onChangeText={HandleInput} />
        <Button title="Enter Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, index) => {
          return <View key={index} style={styles.goal}>
            <Text>{goal}</Text>
          </View>
        })
        }
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

  },
  goal: {
    padding: 8,
    marginVertical: 8,
    backgroundColor: '#5e0acc',
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 8,
    color: '#000'
  }
}
);
