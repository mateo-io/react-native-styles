import React from 'react';
import { Text, View, FlatList } from 'react-native';
import styled from 'styled-components/native';
import Item from '../Item';

const ItemsImages = {
  0: require('../Item/assets/shirt.jpg'),
  1: require('../Item/assets/shirt2.jpg')
}

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
    id: 1,
    brand: 'brand name',
    name: 'OTHER SHIRT - KHAKI',
    price: '94,400won',
    discount: '10%',
    code: '9281',
    milage: '427 point',
    delivery: '집회·결자유. 헌법개更(리위원 9,000) WEQS',
    origin: '국무총年'
  }
]

const StyledList = styled.FlatList`
  margin-top: 75;
`


export default class ListComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
        <StyledList
          data={ItemsArray}
          keyExtractor={ item => item.id}
          renderItem={({ item, index }) => (
            <Item
              {...item}
              image={ItemsImages[index]}
            />
          )}
        />
      </View>
    )
  }
}
