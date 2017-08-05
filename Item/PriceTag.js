import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, Image, View } from 'react-native';


const PriceTag = ({text}) => (
  <RootContainer>

    <PriceTagImageContainer>
      <Image source={require('./assets/tagIcon.png')} />
    </PriceTagImageContainer>

    <PriceTagText>
      {text}
    </PriceTagText>

  </RootContainer>
)


const windowsBlue = '#3d73bd'

const RootContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`

const PriceTagImageContainer = styled.View`
`


const PriceTagText = styled.Text`
  color: ${windowsBlue};
  padding-left: 10px;
  font-size: 18px;
  flex-direction: row;
`

export default PriceTag;
