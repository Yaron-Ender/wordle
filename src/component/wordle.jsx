import React, { useEffect } from 'react';
import { useWordle } from '../hooks/useWordle';
import Grid from './Grid';
import { keypadLetters } from "../data/db";
import Keypad from './Keypad';
const Wordle = ({solution}) => {
 const { currentGuess, handleKeyup,guesses, isCorrect,turn,usedKeys } = useWordle(solution);
 useEffect(()=>{
    window.addEventListener('keyup',handleKeyup)
  return ()=>{window.removeEventListener('keyup',handleKeyup)}
 },[handleKeyup])
 useEffect(() => {
 }, [guesses, isCorrect, turn]);
    return (
      <div>
        <p>the solution is : {solution.word}</p>
        <p>Your Guess is: {currentGuess}</p>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        {keypadLetters && <Keypad keypadLetters={keypadLetters} usedKeys={usedKeys} />}
      </div>
    );
};

export default Wordle;