import React, { Component } from 'react'
import './RollDice.css'
import Dice from './Dice'
import Table from './Table'
import MyChart from './Chart'

class RollDice extends Component {

  constructor(props) {
    super(props)

    // States
    this.state = {
      die1: 1,
      die2: 1,
      rollSums: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sum: 2,
    }
    this.roll = this.roll.bind(this);
    this.roll100 = this.roll100.bind(this);
  }
  roll() {
    let roll1 = Math.ceil(Math.random() * 6);
    let roll2 = Math.ceil(Math.random() * 6);
    this.setState({
      die1: roll1,
      die2: roll2,
    })
    let sumaHodu = roll1 + roll2;
    this.setState({
      sum: sumaHodu,
    })
    this.setState(state => {
      const rollSums = state.rollSums.map((item, idx) => {
        if (idx === sumaHodu - 2) {
          return item + 1;
        }
        else {
          return item;
        }

      });
      return {
        rollSums,
      };
    })
  }
  roll100(){
    for(let i=0;i<100;i++){
      this.roll();
    }
  }
  render() {
    const { die1, die2, rollSums } = this.state
    return (
      <div>
        <div id="diceContainer">
          <Dice val={die1} />
          <Dice val={die2} />
        </div>
        <div id="buttonContainer">
          <div>
            <button onClick={() => this.roll()}>
              Hoď kostkami
            </button>
          </div>
          <div>
            <button onClick={() => this.roll100()}>
              Hoď 100x
            </button>
          </div>
        </div>
        {console.log("Před tabulkou jsou rollSums" + rollSums)}
        <div id="statsTable">
          <Table counts={rollSums} />
        </div>
        {console.log("Před grafem jsou rollSums" + rollSums)}

        <div id="chart">
          <MyChart rollData={rollSums}/>
        </div>
      </div>
    )
  }
}

export default RollDice
