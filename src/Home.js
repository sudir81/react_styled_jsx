import React from 'react'
// import css from 'styled-jsx/macro'

// const { className, styles } = css.resolve`
//   div {
//       color: pink;
//   }
// `

const Home = ({ name }) => {
    console.log("Home component")
    return (
        <React.Fragment>
            <div className="home-first-div">
                <h1>{name}</h1>
                {/* {styles} */}
            </div>
        </React.Fragment>
    )
}

export default Home
