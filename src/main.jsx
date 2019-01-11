import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>This is a title</h1>
        <p>This is a paragraph.</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.body)