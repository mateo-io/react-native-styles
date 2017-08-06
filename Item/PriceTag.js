import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, Image, View } from 'react-native';


const PriceTag = ({price, discount}) => (
  <RootContainer>

    <Image source={require('./assets/tagIcon.png')} />

    <PriceTagText>
      {price}
    </PriceTagText>

    <DiscountText>
      [{discount}]
    </DiscountText>

  </RootContainer>
)


const windowsBlue = '#3d73bd'

const RootContainer = styled.View`
  margin-top: 10;
  margin-bottom: 10;
  flex-direction: row;
  align-items: center;
`

const DiscountText = styled.Text`
  color: ${windowsBlue};
  padding-left: 10;
  font-size: 16;
  flex-direction: row;
`

const PriceTagText = styled.Text`
  color: ${windowsBlue};
  padding-left: 10;
  font-weight: 500;
  font-size: 18;
  flex-direction: row;
`

export default PriceTag;
