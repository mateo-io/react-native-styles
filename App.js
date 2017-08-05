import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Item from './Item';
import Expo from 'expo';

const ItemsImages = [
  require('./Item/assets/shirt.jpg'),
  require('./Item/assets/shirt2.jpg'),
]

const ItemsArray = [
  {
    id: 0,
    brand: 'brand name',
    name: 'SONTAG POCKET SHIRTS - KHAKI',
    price: '43,700won',
    discount: '5%',
    code: '120479',
    milage: '437 point',
    delivery: '집회·결사의 자유. 헌법개更(리위원 3,000) WEQS',
    origin: '국무총年'
  },
  {
    id: 2,
    brand: 'brand name',
    name: 'OTHER SHIRT - KHAKI',
    price: '94,400 won',
    discount: '10%',
    code: '9281',
    milage: '427 point',
    delivery: '집회·결자유. 헌법개更(리위원 9,000) WEQS',
    origin: '국무총年'
  }
]

export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <CloseIcon source={require('./assets/closeIcon.png')} />
        <Item {...ItemsArray[0]} image={ItemsImages[0]} />
        <Item {...ItemsArray[1]} image={ItemsImages[1]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
