import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
   <Link to='/'>Home</Link>
     <Link to='/counter'>Counter</Link>
  <Link to='*'>Error</Link>
       </nav> 
  )
}
export default Navbar 

