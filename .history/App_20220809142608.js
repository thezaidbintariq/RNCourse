import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View s>
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
   padding: 50
  }
}
);
