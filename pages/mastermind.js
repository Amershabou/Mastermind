import React, {
  useState,
  useEffect,
  useRef
} from "react";
import axios from "axios";
import {
  withRouter
} from 'next/router'

import {
  utils
} from "../src/utils"

import Landing from "../src/Landing";
import Solved from "../src/Solved";
import GameOver from "../src/GameOver";
import Game from "../src/Game";
import styles from "./styles.module.css"

const Matermind = () => {
    const [combination, setCombination] = useState(2);
    const [playNumbers, SetPlayNumbers] = useState(2);
    const [attempts, setAttempts] = useState(1);
    const [newGame, setNewGame] = useState(false);
    const [random, setRandom] = useState([]);
    const [response, setResponse] = useState([]);
    const [responseHistory, setResponseHistory] = useState([]);
    const [messages, setMessages] = useState([]);
    const [gusses, setGuesses] = useState(attempts);
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const [solved, setSolved] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [clicked, setClicked] = useState(0)
    const [secondsLeft, setSecondsLeft] = useState(combination * 2);
    const [idx, setIdx] = useState(0);


    let newNumberArray = Array(combination).fill("");

    const isMounted = useRef(false);
    const res = useRef(newNumberArray);

    useEffect(async () => {
      if (isMounted.current) {
        const result = await axios(
          `https://www.random.org/integers/?num=${combination}&min=0&max=${playNumbers}&col=1&base=10&format=plain&rnd=new`,
        );
        let number = result.data.split("").filter((num, key) => key % 2 === 0).map((num) => Number(num));
        setRandom(number);
        res.current = newNumberArray;
        setResponse(res.current);
        setResponseHistory(Array(1).fill(res.current));
        setGuesses(attempts);
        setCount(0);
        setNewGame(true);
        setHasStarted(true);
        setSolved(false);
        setMessages([]);
        setGameOver(false);
        setSecondsLeft(combination * 2);
        setIdx(0);
      } else {
        isMounted.current = true;
      }
    }, [newGame])


    useEffect(() => {
      if (secondsLeft > 0 && hasStarted) {
        const timerId = setTimeout(() => {
          setSecondsLeft(secondsLeft - 1);
        }, 1000);
        return () => clearTimeout(timerId);
      } else if (secondsLeft === 0) {
        res.current = Array(combination).fill("X");
        handleGuess();
      }
    }, [hasStarted, secondsLeft]);


    const handleGuess = () => {
      setIdx(0);
      setGuesses(gusses - 1)
      if (gusses === 1) {
        return setGameOver(true)
      } 
      let newReponsehistory = responseHistory;
      newReponsehistory[count] = res.current;
      newReponsehistory.push(newNumberArray)
      setResponseHistory(newReponsehistory);

      setCount(count + 1);
      let newMessage = "";
      if (secondsLeft === 0) {
        newMessage = "Oops! Time is up for this guess!"
      } else if (utils.areEqual(random, res.current) === true) {
        newMessage = "Congratulations! You have guessed all the numbers and won the game!!!";
        setSolved(true);
      } else {
        if (utils.compare(random, response)[0]) {
          newMessage = "Good try! You have guessed a current number and its current location!";
        } else if (utils.compare(random, response)[1]) {
          newMessage = "Good try! You have guessed a current number!";
        } else {
          newMessage = `Oops! Your guess isn't correct. Try again!`;
        }
      }
      setMessages(messages => [...messages, newMessage])
      res.current = newNumberArray;
      setResponse(res.current);
      setSecondsLeft(combination * 2);
    }

    const handleClick = (e) => {
      e.preventDefault();
      let id = e.target.id;
      setClicked(clicked + 1)
      if (res.current[res.current.length - 1] !== "") {
        return;
      }
      res.current[idx] = Number(id);
      setResponse(res.current)
      let newReponsehistory = responseHistory;
      newReponsehistory[count] = res.current;
      setIdx(idx + 1);
    }

    const checkIfMatch = (e) => {
      e.preventDefault();
      if (res.current[idx] === "") return;
      handleGuess();
    }

    const clearNumbers = () => {
      setIdx(0);
      res.current = newNumberArray;
      setResponse(res.current);
      responseHistory[count] = newNumberArray;
    }

    const handleReturnToMain = () => {
      setHasStarted(false);
      setCombination(2);
      SetPlayNumbers(2);
      setAttempts(1);
    }

    return (
      <div className = {styles.container}>
        {!hasStarted ?  
         <Landing setAttempts={setAttempts} setCombination={setCombination} SetPlayNumbers={SetPlayNumbers} setNewGame={setNewGame} newGame={newGame} />
        : solved ? 
         <Solved handleReturnToMain={handleReturnToMain} random={random}/>
        : gameOver && hasStarted?  
         <GameOver handleReturnToMain={handleReturnToMain} attempts={attempts} random={random} />
        :
         <Game handleReturnToMain={handleReturnToMain} responseHistory={responseHistory} playNumbers={playNumbers} handleClick={handleClick} setNewGame={setNewGame} newGame={newGame} gusses={gusses} messages={messages} secondsLeft={secondsLeft} checkIfMatch={checkIfMatch} clearNumbers={clearNumbers}/>}
     </div>
    )}

export default withRouter(Matermind);