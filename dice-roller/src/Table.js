import { Component } from "react";

class Table extends Component {
  render() {
    const { counts } = this.props;
console.log("counts jsou: " + counts[0]);
counts.map(element => console.log(element));
    return (
      <table>
        <tr>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
        </tr>
        <tr>
        {counts.map(element =>  {
            return(
              <td>
                {element}
              </td>
            )
          })}

        </tr>
      </table>
    )
  }
}

export default Table