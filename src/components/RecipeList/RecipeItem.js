import React, { Component } from 'react'
import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Flex
  } from 'rebass'
import styled from 'styled-components'
import { Edit } from 'styled-icons/feather'

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
                <Flex>
                    <Flex width='1em'>
                        <Edit size='1em' />
                    </Flex>
                    <StyledRecipeName m={2} 
                    onClick={() => this.props.selectRecipe(this.props.index)}>
                        {this.props.name}
                    </StyledRecipeName>
                </Flex>
            </Box>
        );      
    }
}

export default RecipeItem;