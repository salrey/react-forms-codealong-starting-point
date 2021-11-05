import React from "react";
import emojify from "./emojify";

class App extends React.Component {
  render() {
    return (
      <main>
        <form className="App">
          <input id="user_input" name="user_input" type="text" />
          <select id="operation" name="operation">
            <option value="reverse">reverse</option>
            <option value="emojify">emojify</option>
          </select>

          <button type="submit">Check For Palindrome</button>
        </form>

        <section id="result">
          <p>Current feature: reverse</p>
          <p>You typed: </p>
          <p>Result: </p>
        </section>
      </main>
    );
  }
}

export default App;
