import React from "react";
//import ReactDOM from "react-dom";

class SelectSme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [{ name: "Jafar", id: 1 }, { name: "Rajesh", id: 2 }]
    };
  }
  render() {
    let optionTemplate = this.state.values.map(v => (
      <option value={v.id}>{v.name}</option>
    ));

    return (
      <label>
        <select value={this.state.value} onChange={this.onChangehandler}>
          {optionTemplate}
        </select>
      </label>
    );
  }
}
export default SelectSme;
//ReactDOM.render(<SelectBox />, document.getElementById("root"));
