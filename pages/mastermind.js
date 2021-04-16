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
  Alert,
  Form
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faBrain
} from '@fortawesome/free-solid-svg-icons';
// import {Howl, Howler} from 'howler';

const Matermind = () => {
    //  const audioClips = [
    //   {sound: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-four/cartoon_fail_strings_trumpet.mp3?_=1", lable: "losing"},
    //   {sound: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-12634/zapsplat_human_male_shout_yee_haa_14416.mp3", lable: "winning"}
    //   ]
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

    // const soundPlay =(src)=>{
    //   const sound = new Howl({
    //     src,
    //     html5:true
    //   })
    //   sound.play();
    //   sound.rate(1);
    // }

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
      } else if (response[3] !== "" || secondsLeft === 0) {
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


    return (
      <div className = {styles.container}>
       {!hasStarted ?  
        <div className={styles.firstView} >
          <h1 className={styles.item}> Master<FontAwesomeIcon icon={faBrain} />ind</h1>
          <p className={styles.text}>
          To start the game, select the options below and click on the start button!
          </p>
                <Form className={styles.form}>
                  <Form.Label className={styles.label}>Combinations</Form.Label>
                    <Form.Control as="select"
                    // autoFocus
                    placeholder="Type to filter..."
                    className={styles.option}
                    onChange={(e) => setCombination(Number(e.target.value))}
                    >
                    {Array.from(Array(8)).map((x, i) => <option  value={i+2}>{i+2}</option>)}
                    </Form.Control>
                    <Form.Label className={styles.label}>Numbers</Form.Label>
                    <Form.Control as="select"
                    autoFocus
                    className={styles.option}
                    onChange={(e) => SetPlayNumbers(Number(e.target.value))}
                    >
                    {Array.from(Array(8)).map((x, i) => <option  value={i+2}>{i+2}</option>)}
                    </Form.Control>
                    <Form.Label className={styles.label}>Attempts</Form.Label>
                    <Form.Control as="select"
                    autoFocus
                    className={styles.option}
                    onChange={(e) => setAttempts(Number(e.target.value))}
                    >
                    {Array.from(Array(9)).map((x, i) => <option  value={i+1}>{i+1}</option>)}
                    </Form.Control>
                  </Form>

          <Button variant="primary"  size="lg" block className={styles.startButton} onClick={()=>{setNewGame(!newGame)}}>
          Start
          </Button>
        </div>  
      : solved ? 
      <>
            {/* {soundPlay(audioClips[1].sound)} */}
          <Alert  variant="success" className={styles.solved}>
            <Alert.Heading className = {styles.alertMessage}>Congratulations!</Alert.Heading>
            <p className = {styles.alertMessage}>
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
      
      : gameOver && hasStarted?  
        <Alert  variant="danger" className={styles.solved}>
            <Alert.Heading className = {styles.alertMessage}>Sorry, you've lost!</Alert.Heading>
            <p className = {styles.alertMessage}>
              Unfortunately you have exhausted all {attempts} guess attempts and none has matched the number!!!
            </p>
            <p className = {styles.alertMessage}>
              The number you were trying to guess was {random}
            </p>
            <hr/>
            <div className="d-flex justify-content-end">
              {/* {soundPlay(audioClips[0].sound)} */}

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
                  {Array.from(Array(playNumbers + 1)).map((x, i) => <button  id ={i+1} key={i} onClick = {handleClick} className={styles.number} >{i}</button>)}
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
          <div className={styles.timer}>Time Remaining: {secondsLeft}</div>

          <div>
            <Button variant="success" className = {styles.guessSubmit} onClick = {checkIfMatch} >
              Submit A Guess
            </Button>
            <Button variant="danger" className = {styles.guessSubmit} onClick = {clearNumbers} >
              Clear Numbers
            </Button>
          </div>
          <FontAwesomeIcon icon={faChevronCircleLeft} className={styles.exit} onClick={() => setHasStarted(false)}/> 
          </div> }
    </div>
    )}

export default withRouter(Matermind);