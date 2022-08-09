import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter your name" />
        <Button title="Enter Goal" />
      </View>
      <View>
        <Text>List of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer : {
   paddingTop: 50,
   paddingHorizontal: 16
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    paddingBottom: 20
  },
  input: {
    width: '70%',
    borderColor: '#cccccc',
    borderWidth: 2,
    padding: 8,
    marginRight: 8
  }
}
);
