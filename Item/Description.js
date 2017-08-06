import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, Image, View } from 'react-native';

const DescriptionItem = ({attribute, value}) => (
  <InlineContainer>
    <BoldText>{attribute}</BoldText>
    <DescriptionText>{value}</DescriptionText>
  </InlineContainer>
)

export default class Description extends React.Component {
  render() {
    const { code, milage, delivery, origin } = this.props;

    return(
      <RootContainer>
        <DescriptionItem key={0} attribute='CODE' value={code} />
        <DescriptionItem key={1} attribute='MILAGE' value={milage} />
        <DescriptionItem key={2} attribute='DELIVERY' value={delivery} />
        <DescriptionItem key={3} attribute='ORIGIN' value={origin} />
      </RootContainer>
    )
  }
}

// COLORS. TODO REFACTOR INTO ITS OWN FOLDER
const slateGrey = '#5c6773'

// MAIN CONTAINER
const RootContainer = styled.View`
  position: relative;
`

const InlineContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`

const BoldText = styled.Text`
  font-weight: 400;
  font-size: 16;
  letter-spacing: 10;
`

const DescriptionText  = styled.Text`
  padding-left: 5;
  flex-basis: 70%;
  font-size: 15;
  align-self: flex-end;
  color: ${slateGrey};
`
