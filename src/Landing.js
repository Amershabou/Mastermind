import React from "react";
import styles from "../pages/styles.module.css";
import {
  Button,
  Form,
  Tooltip,
  OverlayTrigger
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
                  <OverlayTrigger
                      overlay={
                      <Tooltip id={'tooltip-top'}>
                        Number Combinations 
                      </Tooltip>
                      }>
                    <Form.Control 
                    as="select"
                    autoFocus
                    size = "lg"
                    className={styles.option}
                    onChange={(e) => setCombination(Number(e.target.value))}
                    >
                    {Array.from(Array(8)).map((x, i) => <option  value={i+2}>{i+2}</option>)}
                    </Form.Control>
                  </OverlayTrigger>

                  <OverlayTrigger
                      overlay={
                      <Tooltip id={'tooltip-top'}>
                        Play Numbers 
                      </Tooltip>
                      }>
                      <Form.Control 
                      className={styles.option}
                      as="select"
                      autoFocus
                      size = "lg"
                      onChange={(e) => SetPlayNumbers(Number(e.target.value))}
                     >
                     {Array.from(Array(8)).map((x, i) => <option  value={i+2}>{i+2}</option>)}
                    </Form.Control>
                  </OverlayTrigger>
                  
                  <OverlayTrigger
                      overlay={
                      <Tooltip id={'tooltip-top'}>
                        Number Of Attempts 
                      </Tooltip>
                      }>
                      <Form.Control 
                       className={styles.option}
                       as="select"
                       autoFocus
                       size = "lg"
                       onChange={(e) => setAttempts(Number(e.target.value))}
                      >
                      {Array.from(Array(10)).map((x, i) => <option  value={i+1}>{i+1}</option>)}
                      </Form.Control>
                  </OverlayTrigger>
                </Form>
            
          <Button variant="primary"  size="lg" block className={styles.startButton} onClick={()=>{setNewGame(!newGame)}}>
          Start
          </Button>
        </div>  
)

export default Landing;