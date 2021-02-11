import React from 'react';
import css from 'styled-jsx/macro'

const { className, styles } = css.resolve`
  div {
    font-family: sans-serif;
    text-align: center;
  },
  h1 {
    color: red;
  },
  .content {
    color: pink;
  }
`

function App() {
  return (
    <div className={className}>
      <h1 className="App-header">
      </h1>
      <p className="content">
        React & full stack developer
      </p>
      {styles}
    </div>
  );
}

export default App;
