import React from "react";
import emojify from "./emojify";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      feature: "reverse",
      result: ""
    };
  }

  handleInputChange = (event) => {
    //change our state to reflect what the user has typed in
    // this.setState({
      //   userInput: event.target.value
      // })
      //OR you can use the name attribute to help populate both key value.
      // const { name, value} = event.target;
      // this.setState({
      //   [name]: value,
      // })
      
    if (this.state.feature === "reverse") {
      this.setState({
        userInput: event.target.value,
        result: event.target.value.split("").reverse().join("")
      })

    } else if (this.state.feature === "emojify") {
      this.setState({
        userInput: event.target.value,
        result: emojify(event.target.value),
      })
    }
  }

  handleFeatureChange = (event) => {
    this.setState({
      feature: event.target.value
    })
  }

  render() {
    //OR
    // const { feature, userInput } = this.state;
    return (
      <main>
        <form className="App">
          <input
            id="user_input"
            name="userInput"
            type="text"
            onChange={this.handleInputChange}
          />

          <select 
            id="operation" 
            name="operation"
            onChange={this.handleFeatureChange}
          >
            <option value="reverse">reverse</option>
            <option value="emojify">emojify</option>
          </select>

          <button>Clear Text</button>
        </form>

        <section id="result">
          <p>Current feature: {this.state.feature}</p>
          <p>You typed: {this.state.userInput}</p>
          <p>Result: {this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
