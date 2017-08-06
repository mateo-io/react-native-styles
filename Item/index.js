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
    const { brand, image, name, price, discount, ...rest } = this.props;
    return(
      <Container>
        <ItemImage source={image} />

        <BrandName>
          {brand}
        </BrandName>

        <ItemTitle>
          {name}
        </ItemTitle>

        <PriceTag price={price} discount={discount} />

        <Divider />

        <Description
          {...rest}
        />

      </Container>
    )
  }
}

const slateGrey = '#5c6773'
const windowsBlue = '#3d73bd'


const BrandName = styled.Text`
  padding-top: 10;
  color: ${slateGrey}
`

const ItemTitle = styled.Text`
  padding-top: 10;
  font-size: 24px;
  font-weight: 700;
  color: ${slateGrey};
  line-height: 25px;
`

const ItemImage = styled.Image`
  position: relative;
  height: 250px;
  width: 300px;
  align-self: center;
`


const Container = styled.View`
  padding: 15px 30px 0px 30px;
`
