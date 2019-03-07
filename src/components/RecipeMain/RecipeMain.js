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
  
  
export class RecipeMain extends Component {
    render() {
        return (
            <Box width="70%" m={4}>
                <Text fontWeight='bolder' mb={2}>{this.props.recipe.name}</Text>

                <Text fontWeight='bold' my={2}>Ingredients</Text>
                {this.props.recipe.ingredients.map(ingredient => 
                    <Text mb={1} ml={1}>{ingredient}</Text>
                )
                }

                <Text fontWeight='bold' my={2}>Instructions</Text>
                {this.props.recipe.instructions.map(instruction => 
                    <Text mb={1} ml={1}>{instruction}</Text>
                )
                }

            </Box>
        );      
    }
}

//export default RecipeMain;