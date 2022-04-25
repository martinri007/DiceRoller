import { Component } from "react";

class Dice extends Component{
    render() {
        const {val} = this.props;
        return (
            <div id="die">
                {val}

            </div>
        )
    }
}

export default Dice