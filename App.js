// eslint-disable-next-line no-unused-vars
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import List from './components/List';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <List />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
