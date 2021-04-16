import React from "react";
import styles from "../pages/styles.module.css";
import {
  Button,
  Form
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {
  faBrain
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

const Landing = ({setAttempts,setCombination,SetPlayNumbers, setNewGame, newGame}) => (
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
)

export default Landing;