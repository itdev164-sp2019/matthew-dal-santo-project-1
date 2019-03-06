import React, { Component } from 'react'
import {
    Box,
    Card,
    Image,
    Heading,
    Text
  } from 'rebass'
import styled from 'styled-components'
import { 
    Address,
    BaseContainer,
    Button,
    Footer,
    Header,
    Main,
    Section
   } from '@bit/sudosanto.itdev164.element'
  
const StyledRecipeName = styled(Text)`
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
 `

class RecipeItem extends Component {
    render() {
        return (
            <Box>
                <StyledRecipeName m={2} 
                onClick={() => this.props.selectRecipe(this.props.index)}>
                    {this.props.name}
                </StyledRecipeName>
            </Box>
        );      
    }
}

export default RecipeItem;