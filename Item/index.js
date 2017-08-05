import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, Image, View } from 'react-native';

// OUTSIDE IMPORTS
import Divider from '../Components/Divider';

// LOCAL IMPORTS
import Description from './Description';
import PriceTag from './PriceTag';


export default class Item extends React.Component {
  render() {
    return(
      <Container>
        <CloseIcon source={require('./assets/closeIcon.png')} />
        <ItemImage source={require('./assets/shirt.jpg')} />

        <BrandName>
          brand name
        </BrandName>

        <ItemTitle>
          SONTAG POCKET SHIRTS - KHAKI
        </ItemTitle>

        <PriceTag text='43,700won [5%]' />

        <Divider />

        <Description
          code='120476'
          milage='437 point'
          delivery='집회·결사의 자유. 헌법개更(리위원 3,000) WEQS'
          origin='국무총年'
        />

      </Container>
    )
  }
}

const slateGrey = '#5c6773'
const windowsBlue = '#3d73bd'


const BrandName = styled.Text`
  color: ${slateGrey}
`

const ItemTitle = styled.Text`
  padding-top: 10px;
  font-size: 24px;
  font-weight: 500;
  color: ${slateGrey};
  line-height: 25px;
`

const CloseIcon = styled.Image`
  top: 20px;
  left: 20px;
  height: 30px;
  width: 30px;
  position: absolute;
  z-index: 2;
  align-self: flex-start;
`

const ItemImage = styled.Image`
  height: 250px;
  width: 250px;
  align-self: center;
`


const Container = styled.View`
  flex: 1;
  padding: 10px 30px 0px 30px;
`
