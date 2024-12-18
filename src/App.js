import React from 'react'
import Main from './components/Main.js'
import Navbar from './components/Navbar.js'

/**
 * Challenge: complete the Navbar to match the Figma design
 * 
 * Hints:
 * - for semantic HTML purposes, the Navbar should render
 *   a <header> with a <nav> nested inside. The image and "ReactFacts"
 *   text elements can both be rendered as children inside the <nav>
 * - reference the Figma design for the most accurate info about
 *   colors, sizes, font information, etc.
 */

export default function App(){
    return(
      <>
        <Navbar />
        <Main />
       </>
    )
}