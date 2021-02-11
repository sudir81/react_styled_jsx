import React from 'react';
import css from 'styled-jsx/macro'
import Home from './Home';

const { className, styles } = css.resolve`
  div {
    font-family: sans-serif;
    text-align: center;
  },
  .content {
    color: green;
  }
`

function App() {
  return (
      <React.Fragment>
      <div className={className}>
        <Home name="React with SSR"/>
        <p className="content">
          React/Full stack developer
        </p>
        {styles}
      </div>
    </React.Fragment>
  );
}

export default App;
