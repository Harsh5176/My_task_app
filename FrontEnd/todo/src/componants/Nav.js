import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">My ToDo App</span>
    <ul className="nav">
    <li className="nav-item">
            <Link to="/" className='nav-link'>Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/addtask" className='nav-link'>Add Task</Link>
        </li>
        <li className="nav-item">
            <Link to="/my_task" className='nav-link'>My Task</Link>
        </li>
        <li className="nav-item">
            <Link to="/about" className='nav-link'>About</Link>
        </li>
    </ul>
  </div>
</nav>

  )
}
