import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View>
        <TextInput style={styles.input} placeholder="Enter your name" />
        <Button title="Enter Goal" />
      </View>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
}
);
