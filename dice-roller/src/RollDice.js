import React, { Component } from 'react'
import './RollDice.css'
import Dice from './Dice'

class RollDice extends Component {

    constructor(props){
        super(props)
          
        // States
        this.state = {
          die1 : 1,
          die2 : 1,
        }
        this.roll = this.roll.bind(this)
  }
  roll(){
      this.setState({
          die1 : Math.floor(Math.random()*6),
          die2 : Math.floor(Math.random()*6),
    })
  }

    render() {
        const {die1, die2} = this.state
        return (
            <div id="diceContainer">
                <Dice val={die1}/>
                <Dice val="4"/>

            </div>

        )
    }
}

export default RollDice