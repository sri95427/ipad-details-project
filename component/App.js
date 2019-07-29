import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: "CRUD operations",
      act: 0,
      index: "",
      datas: []
    };
  }

  compnentDidMount() {
    this.refs.name.focus();
  }

  fSubmit = e => {
    e.preventDefault();

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let projectmanager = this.refs.projectmanager.value;
    let designer = this.refs.designer.value;
    let ipadno = this.refs.ipadno.value;

    let data = {
      name,
      projectmanager,
      designer,
      ipadno
    };
    console.log(data);
    datas.push(data);

    this.setState({
      datas: datas
    });
    this.ref.myForm.reset();
    this.refs.name.focus();
  };

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.Title}</h2>
        <form ref="myForm" className="myForm">
          <label>
            SME:
            <select value={this.state.value} ref="name">
              <option value="Jafar">Jafar</option>
              <option value="Rajesh">Rajesh</option>
              <option value="Shravan">Shravan</option>
            </select>
          </label>
          <label>
            Project Manager:
            <select value={this.state.value} ref="projectmanager">
              <option value="Sirisha">Sirisha</option>
              <option value="Naveen">Naveen</option>
              <option value="Rakshitha">Rakshitha</option>
              <option value="Naresh">Naresh</option>
            </select>
          </label>
          <label>
            Designer:
            <select value={this.state.value} ref="designer">
              <option value="Rajkumar">Rajkumar</option>
              <option value="Rishabh">Rishabh</option>
              <option value="Sai-Pavan">Sai Pavan</option>
              <option value="Saleem">Saleem</option>
            </select>
          </label>
          IPAD:
          <select value={this.state.value} ref="ipadno">
            <option value="ST1">ST1</option>
            <option value="ST2">ST2</option>
            <option value="ST3">ST3</option>
            <option value="ST4">ST4</option>
          </select>
          <button onClick={e => this.fSubmit(e)} className="myButton">
            Submit
          </button>
        </form>
        <pre>
          {datas.map((data, i) => (
            <li key={i} className="myList">
              {i + 1}.{data.name}, {data.projectmanager}, {data.designer},
              {data.ipadno}
              <button onClick={() => this.fSubmit(i)} className="myButton">
                Remove
              </button>
            </li>
          ))}
        </pre>
      </div>
    );
  }
}

export default App;
