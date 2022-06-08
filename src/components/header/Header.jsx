import React from 'react'
import './Header.css'
class Personaje extends React.Component {

  render() {
    return(
      <header>
        <img className="header-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/220px-Harry_Potter_wordmark.svg.png" />
      </header>
    )
  }
}

export default Personaje