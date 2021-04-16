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
    const [count, setCount] = useState(1);
    const [hasStarted, setHasStarted] = useState(false);
    const [solved, setSolved] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [clicked, setClicked] = useState(0)
    const [secondsLeft, setSecondsLeft] = useState(combination * 2);


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
        setCount(1);
        setNewGame(true);
        setHasStarted(true);
        setSolved(false);
        setMessages([]);
        setGameOver(false);
        setSecondsLeft(combination * 2);
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
      let newReponsehistory = responseHistory;
      newReponsehistory[count - 1] = res.current;
      setGuesses(gusses - 1)
      if (gusses === 1) {
        setTimeout(() => setGameOver(true), 100)
      } else if (response[response[response.length - 1]] !== "" || secondsLeft === 0) {
        newReponsehistory.push(newNumberArray)
      }
      setResponseHistory(newReponsehistory);
      setCount(count + 1);
      let newMessage = "";
      if (secondsLeft === 0) {
        newMessage = "Oops! Time is up for this guess!"
      } else if (utils.areEqual(random, res.current) === true) {
        newMessage = "Congratulations! If have gussed all the numbers and won the game!!!";
        setSolved(true);
      } else {
        if (utils.compare(random, response)[0]) {
          newMessage = "Good try! You have guessed a current number and its current locartion";
        } else if (utils.compare(random, response)[1]) {
          newMessage = "Good try! You have guessed a current number";
        } else {
          newMessage = `Oops! Your guess isn't correct. Try again!`;
        }
      }
      setMessages(messages => [...messages, newMessage])
      res.current = newNumberArray;
      setResponse(newNumberArray);
      setSecondsLeft(combination * 2);
    }

    const handleClick = (e) => {
      e.preventDefault();
      let id = e.target.id;
      setClicked(clicked + 1)
      if (res.current[res.current.length - 1] !== "") {
        return;
      }
      for (let i = 0; i < res.current.length; i++) {
        if (typeof res.current[i] !== "number") {
          res.current[i] = Number(id);
          setResponse(res.current)
          let newReponsehistory = responseHistory;
          newReponsehistory[count - 1] = res.current;
          break;
        }
      }
    }

    const checkIfMatch = (e) => {
      e.preventDefault();
      if (res.current.includes("")) {
        res.current = newNumberArray;
        setResponse(newNumberArray);
        return;
      }
      handleGuess();
    }

    const clearNumbers = () => {
      res.current = newNumberArray;
      setResponse(newNumberArray);
      responseHistory[responseHistory.length - 1] = newNumberArray;
    }

    const handleReturnToMain = () => {
      setHasStarted(false);
      setCombination(2);
      SetPlayNumbers(2);
      setAttempts(1);
      setSecondsLeft(combination * 2);
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