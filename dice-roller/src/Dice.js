import { Component } from "react";

class Dice extends Component {
    render() {
        const { val } = this.props;
        return (
            <div id="die">
                <div id="dieText">
                    {val}
                </div>
            </div>
        )
    }
}

export default Dice