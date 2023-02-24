import { useEffect, useState } from "react";
import { solutionDatabase, keypadLetters } from "./data/db";
import Wordle from "./component/wordle";
import Keypad from "./component/Keypad";
function App() {

  // const [error, setError] = useState(false);
  // const [padding, setPadding] = useState(false);
  const [solution, setSolution] = useState(null);
useEffect(()=>{
setSolution(solutionDatabase[Math.floor(Math.random() * solutionDatabase.length)]);

},[setSolution])

  return (
  <div className="App">
  <h1>Wordle (Lingo)</h1>
  {solution && <Wordle solution={solution} />}
  {keypadLetters&& <Keypad keypadLetters={keypadLetters} />}
  </div>
  );
}
export default App;

/* 
data we need to track:
  -- solution
    -- 5 letter string, e.g. 'drain'
  -- past guesses
    -- an array of past guesses
    -- each past guess is an array of letter objects [{}, {}, {}, {}, {}]
    -- each object represents a letter in the guess word {letter: 'a', color: 'yellow'}
  -- current guess
    -- string 'hello'
  -- keypad letters
    -- array of letter objects [{key: 'a', color: 'green'}, {}, {} ...]
  -- number of turns
    -- an integer 0 - 6
game process:
  -- entering words:
    -- user enters a letter & a square is filled with that letter
    -- when a user hits delete it deletes the previous letter
    -- when a user hits enter it submits the word
      -- if all squares are not filled with letters then the word is not submitted
      -- if that word has already been used in a prev guess then the word is not submitted
  -- checking submitted words:
    -- each letter is checked to see if it matches to the solution
    -- each letter is assigned a color based on it's inclusion in the solution
      -- exact matches (correct position in the solution) are green
      -- partial matches (in the solution but not the correct position) are yellow
      -- none-matches (not in the solution at all) are grey
    -- the guess is added the grid with the correct colors
    -- the current guess moves to the next row
    -- the keypad letters are updated (colors)
  -- ending the game:
    -- when the guessed word fully matches the solution
      -- modal to say 'well done'
    -- when the user runs out of guesses
      -- modal to say 'unlucky'
*/

//BECAUSE I COULDN'T FETCH DATA I GUES PROBLEM WITH JSON SERVER I MOVED TO ANOTHER APPROCH


  // useEffect(() => {
  //   // fetch("  http://localhost:3001/solution")
  //   //   .then((res) => {
  //   //     return res.json();
  //   //   })
  //   //   .then((json) => {
  //   //     const randomSolution = json[Math.floor(Math.random() * json.length)];
  //   //     setSolution(randomSolution);
  //   //   });

  //   //   const fetchData =async()=>{
  //   //   const res =await fetch("http://localhost:3001/solutions");
  //   //   setPadding(true)
  //   //   try{
  //   // if(res.status !==200){
  //   //  setError(true);
  //   //  setPadding(false);
  //   //  throw new Error('could\'nt fetch data')
  //   // }
  //   // const result = await res.json();
  //   // const random = Math.round(Math.random()*result.length)
  //   // setSolution((prev) => (result[random]));
  //   //  setError(false);
  //   //  setPadding(false);
  //   //   }catch(err){
  //   //   setError(true);
  //   //  setPadding(false);
  //   //   console.log(err.message)
  //   //   console.log('could not fetch the data')
  //   //   }
  //   //    }
  //   //    fetchData()
  // }, [setSolution]);