import React, { useEffect,useState } from 'react';
import { useWordle } from '../hooks/useWordle';
import Grid from './Grid';
import { keypadLetters } from "../data/db";
import Keypad from './Keypad';
import Modal from './Modal';
const Wordle = ({solution}) => {
const [showModal,setShowModal]=useState(false);
 const { currentGuess, handleKeyup,guesses, isCorrect,turn,usedKeys } = useWordle(solution);
 useEffect(()=>{
  window.addEventListener('keyup',handleKeyup)
  if(isCorrect){
  setTimeout(()=>{setShowModal(true)},2000)
   window.removeEventListener("keyup", handleKeyup); 
  }
  if(turn > 5){
 setTimeout(()=>{setShowModal(true)},2000)
   window.removeEventListener("keyup", handleKeyup); 
  }
  return ()=>{window.removeEventListener('keyup',handleKeyup)}
 },[handleKeyup,isCorrect,turn])

    return (
  <div>
  <p>the solution is : {solution.word}</p>
  <h3>Your Guess is: {currentGuess}</h3>
  <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
  {keypadLetters && <Keypad keypadLetters={keypadLetters} usedKeys={usedKeys} />}
  {showModal&&<Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
  </div>
    );
};

export default Wordle;