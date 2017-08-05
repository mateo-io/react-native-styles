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
        <DescriptionItem attribute='CODE' value={code} />
        <DescriptionItem attribute='MILAGE' value={milage} />
        <DescriptionItem attribute='DELIVERY' value={delivery} />
        <DescriptionItem attribute='ORIGIN' value={origin} />
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
  font-size: 18px;
  letter-spacing: 10px;
`

const DescriptionText  = styled.Text`
  padding-left: 5px;
  flex-basis: 70%;
  font-size: 15px;
  align-self: flex-end;
  color: ${slateGrey};
`
