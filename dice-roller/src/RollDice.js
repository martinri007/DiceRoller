import React, { Component } from 'react'
import './RollDice.css'
import Dice from './Dice'
import Table from './Table'

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
        this.roll = this.roll.bind(this)
    }
    roll() {
        this.setState({
            die1: Math.ceil(Math.random() * 6),
            die2: Math.ceil(Math.random() * 6),
        })
        console.log("kostka 1: " + this.state.die1 + "kostka 2: " + this.state.die2);
        let sumaHodu = this.state.die1 + this.state.die2;
        this.setState({
            sum: sumaHodu,
        })
        console.log("Suma hodu je " + sumaHodu);
        this.setState(state => {
            const rollSums = state.rollSums.map((item, idx) => {
                if (idx === sumaHodu - 2) {
                    return item + 1;
                }
                else {
                    return item;
                }

            });
            return{
                rollSums,
            };
        })
    }

    render() {
        const { die1, die2, rollSums } = this.state
        return (
            <div>
                <div id="diceContainer">
                    <Dice val={die1} />
                    <Dice val={die2} />
                </div>
                <button onClick={() => this.roll()}>
                    Hoď kostkami!
                </button>
                <div id="statsTable">
                    <Table counts={rollSums} />
                </div>
            </div>
        )
    }
}

export default RollDice