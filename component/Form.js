import React from "react";
//import axios from "axios";
import "font-awesome.min.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sme: "Jafar",
      projectManager: "Sirisha",
      designer: "",
      ipad: "",
      datas: [],
      act: 0,
      currentDate: "",
      returnedDate: ""
      //returnButton:true      
    };
  }

  onChangehandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /*handleSmeChange = event => {
    const target = event.target.value;
    this.setState({
      sme: target
    });
  };

  handlePmChange = event => {
    const target = event.target.value;
    this.setState({
      projectManager: target
    });
  };

  handleDesignerChange = event => {
    const target = event.target.value;
    this.setState({
      designer: target
    });
  };

  handleIpadChange = event => {
    const target = event.target.value;
    this.setState({
      ipad: target
    });
  };
*/
  handleSubmit = event => {
    event.preventDefault();

  /*  axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then(response => {
        console.log(response);
      }); */

    let datas = this.state.datas;
    let sme = this.state.sme;
    let projectManager = this.state.projectManager;
    let designer = this.state.designer;
    let ipad = this.state.ipad;

    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();
    let hours = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();

    this.setState({
      datas: datas
    });

    if (this.state.act === 0) {      

      let currentDate =
        date + "-" + month + "-" + year + "/" + hours + ":" + min + ":" + sec;
      //let returnedDate =
        //date + "-" + month + "-" + year + "/" + hours + ":" + min + ":" + sec;
      let returnButton= true;
      let data = {
        sme,
        projectManager,
        designer,
        ipad,
        currentDate,
        //returnedDate,
        returnButton
      };
      datas.push(data);
      //this.state.myForm.reset();
    } else {     

      let returnedDate =
        date + "-" + month + "-" + year + "/" + hours + ":" + min + ":" + sec;

      let index = this.state.index;
      datas[index].sme = sme;
      datas[index].projectManager = projectManager;
      datas[index].designer = designer;
      datas[index].ipad = ipad;
      datas[index].returnedDate = returnedDate;
      if(this.state.act === 2){
        datas[index].returnButton = false;
      }
      

      this.setState({
      act: 0,
      datas: datas      
    });
    }
    this.state.myForm.reset();
  };
  fEdit = i => {
    let data = this.state.datas[i];
    this.setState({
      sme: data.sme,
      projectManager: data.projectManager,
      designer: data.designer,
      ipad: data.ipad
    });

    this.setState({
      act: 1,
      index: i
    });
    //this.state.myForm.reset();
  };
  fRemove = i => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas
    });
    this.state.myForm.reset();
  };

  fReturned = i => {
    let data = this.state.datas[i];
    data.returnButton = false;
    this.setState({
      sme: data.sme,
      projectManager: data.projectManager,
      designer: data.designer,
      ipad: data.ipad,
      returnButton: data.returnButton,
    });
    this.setState({
      act: 2,
      index: i
    });
    //this.state.myForm.reset();
  };

  render() {
    const { sme, projectManager, designer, ipad } = this.state;
    let datas = this.state.datas;
    //console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit} name="myForm">
          <div>
            <label>SME</label>
            <select
              value={sme}
              name="sme"
              onChange={this.onChangehandler}
              className="select-css"
            >
              <option value="sme">SME</option>
              <option value="Jafar">Jafar</option>
              <option value="Rajesh">Rajesh</option>
              <option value="Shravan">Shravan</option>
            </select>
          </div>
          <div>
            <label>project Manager</label>
            <select
              value={projectManager}
              name="projectManager"
              onChange={this.onChangehandler}
              className="select-css"
            >
              <option value="pm">project Manager</option>
              <option value="Sirisha">Sirisha</option>
              <option value="Naveen">Naveen</option>
            </select>
          </div>
          <div>
            <label>Designer</label>
            <select
              value={designer}
              name="designer"
              onChange={this.onChangehandler}
              className="select-css"
            >
              <option value="designer">Designer</option>
              <option value="Rajkumar">Rajkumar</option>
              <option value="Rishabh">Rishabh</option>
            </select>
          </div>
          <div>
            <label>IPAD</label>
            <select
              value={ipad}
              name="ipad"
              onChange={this.onChangehandler}
              className="select-css"
            >
              <option value="ipad">IPAD NO</option>
              <option value="ST1">ST1</option>
              <option value="ST2">ST2</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>

        <pre>
          <table id="customers">
            <tbody>
              <tr>
                <th>S.NO</th>
                <th>SME Name</th>
                <th>Project Manager Name</th>
                <th>Designer Name</th>
                <th>IPAD Name</th>
                <th>Assigned Date/Time</th>
                <th>Returned Date/Time</th>
              </tr>

              {datas.map((data, i) => (
                <tr key={i} className="myList">
                  <td>{i + 1}.</td>
                  <td>{data.sme}</td>
                  <td>{data.projectManager}</td>
                  <td>{data.designer}</td>
                  <td>{data.ipad}</td>
                  <td>{data.currentDate}</td>
                  <td>{data.returnedDate}</td>
                  {data.returnButton ? (
                    <div>
                      <button
                        onClick={() => this.fEdit(i)}
                        className="myButton edit-button"
                      >
                        Edit
                      </button>
                     {/* <button
                        onClick={() => this.fRemove(i)}
                        className="myButton delete-button"
                      >
                        Remove
                      </button> */ }
                      <button
                        style={this.style}
                        onClick={() => this.fReturned(i)}
                        className="myButton return-button"
                      >
                        Return
                      </button>
                    </div>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </pre>
      </div>
    );
  }
}
export default Form;
