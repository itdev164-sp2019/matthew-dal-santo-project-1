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
import RecipeItem from './RecipeItem'  


export class RecipeList extends Component {
    render() {
        return (
            <Box width="30%" mt={4}>

                <Text 
                fontWeight='bolder'
                fontSize={3}
                mb={2}>
                    Recipe List
                </Text>

                {this.props.recipes.map(recipe => 
                    <RecipeItem 
                        index={recipe.index}
                        name={recipe.name}
                        selectRecipe={this.props.selectRecipe} />
                )
                }
            </Box>
        );      
    }
}

//export default RecipeList;