import React from 'react'
import Square from './Square'
import Knight from '../pieces/Knight'
import { canMoveKnight , moveKnight } from '../../Game'



function renderSquare(i, j, [knightX, knightY]) {
  
  const isKnightHere = i === knightX && j === knightY
  const black = (i + j) % 2 !== 1
  const piece = isKnightHere ? <Knight /> : null
  
  return (
    <div key={[i, j]} style={{ width: '12.5%', height: '12.5%' }} onClick={() => handleSquareClick(i, j)}>
      <Square black={black}>{piece}</Square>
    </div>
   
  )
  
  function handleSquareClick(toX, toY) {
     if(canMoveKnight(toX, toY))
        moveKnight(toX, toY);
        
        

        
      
  }
}

  


export default function Board({ knightPosition }) {
   
  const squares = []
  for (let i = 0; i < 8; i++) {
      for(let j=0;j<8;j++){
        squares.push(renderSquare(i, j, knightPosition))
      }
    
  }

  return (
      <>
    
    <div style={
        {
        fontFamily : 'cursive',
        fontWeight : 'bolder',
        textJustify : 'center'
        
    }}>
      WELCOME TO THE KNIGHT's CHESS 
      <div style={{
        width : '95%',
        height: '95%',
        display: 'flex',
        flexWrap : 'wrap',
        border : '10px solid lavender',
        justifyContent : 'center',
        
       
        position : 'absolute'
      }}>{squares}</div>
    </div>
    </>
  )
}