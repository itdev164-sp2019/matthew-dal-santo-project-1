import React, { Component } from 'react'
import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Modal,
    Fixed
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
  
   const Details = styled.details([], {
    '& > summary': {
      listStyle: 'none',
      cursor: 'pointer',
      '::-webkit-details-marker': {
        display: 'none',
      },
    },
    '&[open] > summary::before': {
      content: "''",
      position: 'fixed',
      zIndex: 1,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  })
  
export class RecipeModal extends Component {
    render() {
        if (!this.props.isModal) {
            return null;
          }
          return (
            <div class="modal" id="modal">
              <h2>Modal Window</h2>
              <div class="content">{this.props.children}</div>
              <div class="actions">
                <button class="toggle-button" onClick={this.onClose}>
                  close
                </button>
              </div>
            </div>
          );   
    }
}

//export default RecipeModal;