import React from "react";
import emojify from "./emojify";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      feature: "reverse"
    };
  }

  handleInputChange = (event) => {
    //change our state to reflect what the user has typed in
    this.setState({
      userInput: event.target.value
    })
      //OR
    // const {value} = event.target;
    // this.setState({
    //   userInput: value,
    // })
  }

  handleFeatureChange = (event) => {
    this.setState({
      feature: event.target.value
    })
  }

  render() {
    return (
      <main>
        <form className="App">
          <input
            id="user_input"
            name="user_input"
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
          <p>Result: </p>
        </section>
      </main>
    );
  }
}

export default App;
