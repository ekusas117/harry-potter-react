import React from 'react'
import './Submenu.css'
import { Link, useParams } from "react-router-dom"

class Submenu extends React.Component {


  render() {
    return(
      <section className="submenu">
          <Link className='link' to="/home/all">Todos</Link>
          <Link className='link' to="/home/students">Estudiantes</Link>
          <Link className='link' to="/home/staff">Staff</Link>

      </section>
    )
  }
}

export default Submenu