import { Component } from "react"
import Chart from "react-apexcharts";
import RollDice from "./RollDice";

class MyChart extends Component {
  //https://apexcharts.com/docs/react-charts/
  constructor(props) {
    super(props);
    console.log("RollData jsou " + this.props.rollData);


    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        },
        theme: {
          mode: 'dark',
          palette: 'palette10' // upto palette10
        }

      },
    };
  }

  render() {
    return (
      <div className="StatsChart" >
        <Chart
          options={this.state.options}
          series={[
            {
              name: "Sum occurrence",
              data: this.props.rollData,
            }
          ]}
          type="bar"
          width="500"
        />
      </div>
    );
  }
}

export default MyChart