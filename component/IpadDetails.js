import React from "react";
import "font-awesome.min.css";

class IpadDetails extends React.Component {
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
      returnedDate: "",
      posts: [],
      id: 1
    };
  }

  onChangehandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    let datas = this.state.datas;
    let id = this.state.id;
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
      this.setState({
        id: id + 1
      });
      let currentDate =
        date + "-" + month + "-" + year + "/" + hours + ":" + min + ":" + sec;

      let returnButton = true;
      let data = {
        id,
        sme,
        projectManager,
        designer,
        ipad,
        currentDate,
        returnButton
      };
      //console.log(data);
      datas.push(data);
      //this.state.myForm.reset();
    } else {
      let returnedDate =
        date + "-" + month + "-" + year + "/" + hours + ":" + min + ":" + sec;

      let idvalue = this.state.idvalue;
      datas[idvalue].sme = sme;
      datas[idvalue].projectManager = projectManager;
      datas[idvalue].designer = designer;
      datas[idvalue].ipad = ipad;
      datas[idvalue].returnedDate = returnedDate;
      if (this.state.act === 2) {
        datas[idvalue].returnButton = false;
      }

      this.setState({
        act: 0,
        datas: datas
      });
      this.state.myForm.reset();
    }
  };
  fEdit = id => {
    let data = this.state.datas[id];
    this.setState({
      sme: data.sme,
      projectManager: data.projectManager,
      designer: data.designer,
      ipad: data.ipad
    });

    this.setState({
      act: 1,
      //index: i
      idvalue: id
    });
  };
  fRemove = id => {
    let datas = this.state.datas;
    datas.splice(id, 1);
    this.setState({
      datas: datas
    });
    this.state.myForm.reset();
  };

  fReturned = id => {
    let data = this.state.datas[id];
    data.returnButton = false;
    this.setState({
      sme: data.sme,
      projectManager: data.projectManager,
      designer: data.designer,
      ipad: data.ipad,
      returnButton: data.returnButton
    });
    this.setState({
      act: 2,
      //index: i
      idvalue: id
    });
  };

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/RajkumarDole/ipadDetails/posts") // Call the fetch function passing the url of the API as a parameter
      .then(resp => resp.json())
      .then(data => {
        let posts = data.map((post, index) => {
          return (
            <div key={index}>
              <h3>{post.title}</h3>
              <p>tags:{post.tags}</p>
            </div>
          );
        });
        this.setState({ datas: posts });
        //console.log(posts);
        /*  this.setState(
          {
            datas: data
          },
          function() {}
        ); */
      })
      .catch(function() {
        // This is where you run code if the server returns any errors
      });
  }

  render() {
    const { sme, projectManager, designer, ipad } = this.state;
    let datas = this.state.datas;
    console.log(datas);
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
                    <td>
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
                      </button> */}
                      <button
                        style={this.style}
                        onClick={() => this.fReturned(i)}
                        className="myButton return-button"
                      >
                        Return
                      </button>
                    </td>
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
export default IpadDetails;
