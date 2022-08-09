import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={s}>Hello World</Text>
      </View>
        
        <Text style={styles.dummyText}>
          Hello World
          </Text>
        <Button title="Press Me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    padding: 16,
    margin: 16,
    borderWidth: 1,
    borderColor: '#000'
}}
);
