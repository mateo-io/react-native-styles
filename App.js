import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Expo from 'expo';
import ListComponent from './Components/ListComponent';
import Footer from './Components/Footer';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <CloseIcon source={require('./assets/closeIcon.png')} />
        <ListComponent />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});


const CloseIcon = styled.Image`
  top: 20px;
  left: 20px;
  height: 30px;
  width: 30px;
  position: absolute;
  z-index: 2;
  align-self: flex-start;
`

Expo.registerRootComponent(App);
