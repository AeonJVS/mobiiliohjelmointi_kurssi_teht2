import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [guess, setGuess] = useState(null);
  const [result, setResult] = useState(3);
  const [count, setCount] = useState(null);
  const [msg, setMsg] = useState("Guess a number between 1-100");

  const randomizeResult = () => {
    setResult(Math.floor(Math.random() * 100) + 1);
  }

  const compareNumbers = () => {
    setCount(count + 1);
    let intGuess = parseInt(guess);

    if (intGuess === result) {
      alert("You guessed the number in " + (count + 1) + " guesses")
      randomizeResult();
      setCount(null);
    } else if (intGuess > result) setMsg("Your guess " + guess + " is too high")
    else setMsg("Your guess " + guess + " is too low")

  }

  return (
    <View style={styles.container}>

      <Text>{msg}</Text>
  
      <TextInput
        style={{width:200, borderColor: 'gray', borderWidth:1}}
        onChangeText={guess => setGuess(guess)}
        value={guess}
        keyboardType="numeric"
      />


      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Button onPress={compareNumbers}title="Make a guess" />
      </View>

      <StatusBar style="auto" />
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
});
