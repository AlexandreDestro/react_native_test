import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, TextInput, Button, Card, Text } from 'react-native-paper';


export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = (operacao) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResultado('Valores inválidos');
      return;
    }

    switch (operacao) {
      case '+':
        setResultado(a + b);
        break;
      case '-':
        setResultado(a - b);
        break;
      case '*':
        setResultado(a * b);
        break;
      case '/':
        setResultado(b !== 0 ? a / b : 'Divisão por zero');
        break;
      default:
        setResultado('Operação inválida');
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.titulo}>
          Calculadora com React Native Paper
        </Text>

        <TextInput
          label="Primeiro número"
          keyboardType="numeric"
          value={num1}
          onChangeText={setNum1}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Segundo número"
          keyboardType="numeric"
          value={num2}
          onChangeText={setNum2}
          style={styles.input}
          mode="outlined"
        />

        <View style={styles.botoes}>
          {['+', '-', '*', '/'].map((op) => (
            <Button
              key={op}
              mode="contained"
              style={styles.botao}
              onPress={() => calcular(op)}
            >
              {op}
            </Button>
          ))}
        </View>

        {resultado !== null && (
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleLarge">Resultado: {resultado}</Text>
            </Card.Content>
          </Card>
        )}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginVertical: 10,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  botao: {
    marginHorizontal: 5,
  },
  card: {
    marginTop: 30,
    padding: 10,
  },
});
