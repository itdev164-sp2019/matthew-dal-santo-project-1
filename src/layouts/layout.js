import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components'
import { Gray as theme } from '../themes/Gray'
import "./layout.css"

import {
  Box,
  Flex,
  Card,
  Image,
  Heading,
  Text
} from 'rebass';
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

 const StyledHeaderText = styled(Text)`
    text-decoration: none;
    font-weight: bold;
 `

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Box m={4}>

      <Header>
        <StyledHeaderText 
        textAlign='center'
        fontSize={5}>
          Recipe App
        </StyledHeaderText>
      </Header>

      <Main>
        { children }
      </Main>

      <Footer>

      </Footer>

    </Box>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout