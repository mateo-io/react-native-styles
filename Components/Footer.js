import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';


export default class Footer extends React.Component {
  render(){
    return(
      <FooterContainer>
        <FooterText>구매하기</FooterText>
      </FooterContainer>
    )
  }
}

const FooterContainer = styled.View`
  background-color: #232b38;
  position: relative;
  bottom: 0;
  height: 120;
  width: 100%;
  align-self: stretch;
  align-items: center;
`
const FooterText = styled.Text`
  color: white;
  padding-top: 20;
  font-size: 18;
`
