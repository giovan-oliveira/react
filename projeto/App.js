/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <Text style={styles.titulo}>Lista de compras</Text>
          </View>
          <View style={styles.botaoInserir}>
            <Button
              color="#000000"
              title="Inserir Item"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>

          <View style={styles.botaoLista}>
            <Button
              color="#000000"
              title="Ver Lista"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  titulo: {
    fontSize: 45,
    textAlign: 'center',
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  botaoInserir: {
    width: 200,
    marginTop: 290,
    marginLeft: 90,
  },
  botaoLista: {
    width: 200,
    marginTop: 29,
    marginLeft: 90,
  },
});

export default App;
