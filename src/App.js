import React, { Component } from 'react';
import {
  Box,
  Flex,
  Card,
  Image,
  Heading,
  Text,
  Modal,
  Fixed
} from 'rebass';
import styled from 'styled-components'
import Layout from "./layouts/layout"

import { 
  Address,
  BaseContainer,
  Button,
  Footer,
  Header,
  Main,
  Section
 } from '@bit/sudosanto.itdev164.element'

import { RecipeList } from './components/RecipeList'
import { RecipeMain } from './components/RecipeMain'
import { RecipeModal } from './components/RecipeModal'

class App extends Component {

  constructor(props) {
    super(props);
    this.changeSelectedRecipe = this.changeSelectedRecipe.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      selectedRecipe: 1,
      isModal: false,
      recipes: [
        {index: 1,
        name: "Mocha Chip Cookies",
        ingredients: ["1C butter", 
                      "3/4C sugar", 
                      "3/4C brown sugar", 
                      "2 eggs", 
                      "1t vanilla extract",
                      "1t instant coffee crystals",
                      "2 1/2C flour",
                      "1t salt",
                      "1t baking soda",
                      "3C chocolate chips",
                      "1 1/2C walnuts, toasted"],
        instructions: ["Add butter, sugar, brown sugar, eggs, vanilla, and instant coffee to a mixer and cream till color lightens.",
                      "Pulse chocolate chips and walnuts in a food processor a couple times. Careful not mix them too fine.",
                      "Mix flour, salt, and baking soda fold into creamed batter with chocolate chip and wallnut mixture. Incorporate, but do not overwork the batter.",
                      "Bake for 10-12 minutes at 315 degrees or until cookies are slightly brown."]},
        {index: 2,
        name: "Last Word Cocktail",
        ingredients: ["3/4oz gin", 
                      "3/4oz lime juice",
                      "3/4oz Green Chartreuse",
                      "3/4oz Luxardo Maraschino Liqueur"],
        instructions: ["Prepare a stainless cocktail shaker with ice and let sit for aproximately 1 minute.",
                      "Add gin, lime juice, Green Chartreuse, and Luxardo Maraschino Liqueur.",
                      "Shake liberally for 10-15 seconds.",
                      "Strain with a hawthorn strainer into a nick and nora glass.",
                      "Enjoy."
                      ]},
        {index: 3,
        name: "The Best God-Damned Cocktail Ever Made",
        ingredients: ["2oz bourbon or scotch"],
        instructions: ["Pour bourbon into a glencairn glass.",
                      "Let sit for 10-20 minutes.",
                      "Enjoy."]}
      ]
    };
  }

  changeSelectedRecipe(index) {
    this.setState({
      selectedRecipe: index
    })
  }

  toggleModal() {
    this.setState({
      isModal: !this.state.isModal
    })
  }

  render() {
    const selectedRecipe = this.state.recipes.find((recipe) => 
      recipe.index === this.state.selectedRecipe);

    return (
      <Layout>

        <Flex>
          <RecipeMain recipe={selectedRecipe} />
          <RecipeList 
          recipes={this.state.recipes} 
          selectRecipe={this.changeSelectedRecipe} />
        </Flex>

        {/* <RecipeModal 
        isModal={this.state.isModal} />

        <Button 
        onClick={() => this.toggleModal()}
        children='ToggleModal' /> */}

      </Layout>
    );
  }
}

export default App;
