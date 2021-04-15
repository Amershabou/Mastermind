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
import styles from "./styles.module.css"
import {
  Button,
  Jumbotron,
  Alert
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';


const Matermind = () => {
    const combination = 4;
    const [newGame, setNewGame] = useState(false);
    const [random, setRandom] = useState([]);
    const [response, setResponse] = useState(["", "", "", ""]);
    const [responseHistory, setResponseHistory] = useState([]);
    const [messages, setMessages] = useState([]);
    const [gusses, setGuesses] = useState(10);
    const [count, setCount] = useState(1);
    const [hasStarted, setHasStarted] = useState(false);
    const [solved, setSolved] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [clicked, setClicked] = useState(0)

    const isMounted = useRef(false);
    const res = useRef(["", "", "", ""]);
    useEffect(async () => {
      if (isMounted.current) {
        const result = await axios(
          `https://www.random.org/integers/?num=${combination}&min=0&max=7&col=1&base=10&format=plain&rnd=new`,
        );
        let number = result.data.split("").filter((num, key) => key % 2 === 0).map((num) => Number(num));
        setRandom(number);
        res.current = ["", "", "", ""]
        setResponse(res.current);
        setResponseHistory(Array(1).fill(res.current));
        setGuesses(10);
        setCount(1);
        setNewGame(false);
        setHasStarted(true);
        setSolved(false);
        setMessages([]);
        setGameOver(false);
      } else {
        isMounted.current = true;
      }
    }, [newGame])

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
        res.current = ["", "", "", ""];
        setResponse(["", "", "", ""]);
        return;
      }
      let newReponsehistory = responseHistory;
      newReponsehistory[count - 1] = res.current;
      setGuesses(gusses - 1)
      if (gusses === 1) {
        setTimeout(() => setGameOver(true), 100)
      } else if (response[3] !== "") {
        newReponsehistory.push(["", "", "", ""])

      }
      setResponseHistory(newReponsehistory);

      setCount(count + 1);
      let newMessage = "";
      if (utils.areEqual(random, res.current) === true) {
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
      res.current = ["", "", "", ""];
      setResponse(["", "", "", ""]);
    }

    const clearNumbers = () => {
      res.current = ["", "", "", ""];
      setResponse(["", "", "", ""]);
      responseHistory[responseHistory.length - 1] = ["", "", "", ""];
    }

    return (<div className = {styles.container}>
     {!hasStarted ?  
     <Jumbotron className={styles.firstView} >
       <h1 className={styles.item}> Master<FontAwesomeIcon icon={faBrain} />ind</h1>
       <p className={styles.text}>
       To start the game, click on the start button below!
       </p>
    
      <Button variant="primary"  size="lg" block className={styles.startButton} onClick={()=>{setNewGame(true)}}>
       Start
      </Button>
   
   </Jumbotron> 
   
   : solved ? 
   <>
      <Alert  variant="success" className={styles.solved}>
        <Alert.Heading>Congratulations!</Alert.Heading>
        <p>
         You have gussed all the numbers and won the game!!! 
         The number you guessed is {random}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setHasStarted(false)} variant="outline-success">
            Back to game!
          </Button>
        </div>
      </Alert>
    </>
   
   : gameOver && hasStarted?  <Alert  variant="danger" className={styles.solved}>
   <Alert.Heading>Sorry, you've lost!</Alert.Heading>
   <p>
   Unfortunately you have exhausted all 10 guess attempts and none has matched the number!!!
   The number you were trying to guess was {random}
   </p>
   <hr />
   <div className="d-flex justify-content-end">
     <Button onClick={() => setHasStarted(false)} variant="outline-danger">
       Back to game!
     </Button>
  </div>
 </Alert>
:
   <div className={styles.secondView}>
    <h1 className={styles.item}> Master<FontAwesomeIcon icon={faBrain} />ind</h1>
      <div className={styles.numbersTable}>

       <div className={styles.box}>
        <form className={styles.numbersBox}>
            {Array.from(Array(8)).map((x, i) => <button  id ={i} key={i} onClick = {handleClick} className={styles.number} >{i}</button>)}
        </form>
     
       
        <Button variant="secondary" className={styles.newStartButton}  onClick={()=>{setNewGame(true)}}>
       Start A New Game
      </Button>
      </div>
     </div>
     <div className={styles.guessBox}>
     <p className={styles.text}>
         You Have <b>{gusses} </b> Guesses Left
       </p>
       {responseHistory.map((x, i) => 
         <div className={styles.guessRow} id ={i} key={i} > 
          <div className={styles.insideBox}> 
           {responseHistory[i].map((num, idx) => 
             <button className={styles.square} id ={idx} key={idx}>
               {num}
             </button>)} 
          </div>
          
          {messages[i] === "" ? <div></ div> :   <div className={styles.message}>{messages[i]}</ div> }  
         </div>)}

     </div>
     <div>
     <Button variant="success" className = {styles.guessSubmit} onClick = {checkIfMatch} >
          Submit A Guess
      </Button>
      <Button variant="danger" className = {styles.guessSubmit} onClick = {clearNumbers} >
          Clear Numbers
      </Button>
     </div>
    </div> }
    </div>)
}

export default withRouter(Matermind);