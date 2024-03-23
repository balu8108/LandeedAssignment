import React, {useContext} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Context as InputFormPageContext} from './InputFormPageContext';
import {useRoute} from '@react-navigation/native';

const InputFormPageScreen = () => {
  const {state, submitOTL, setAuthResult, setPhoneNumber} =
    useContext(InputFormPageContext);
  const {payLoad} = useRoute().params;

  return (
    <View style={styles.container}>
      <View style={styles.emptyView} />
      <Text>Auth result: {JSON.stringify(payLoad)}</Text>
      <View style={styles.emptyView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyView: {
    height: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default InputFormPageScreen;
