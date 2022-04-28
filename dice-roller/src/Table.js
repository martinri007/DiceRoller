import { Component } from "react";

class Table extends Component {
  
  
  render() {
    const { counts } = this.props;
console.log("counts jsou: " + counts);
counts.map(element => console.log(element));
    return (
      <table>
        <tr>
          {[2,3,4,5,6,7,8,9,10,11,12].map(element =>  {
            return(
              <td>
                {element}
              </td>
            )
          })}
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