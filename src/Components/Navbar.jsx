import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='p-8 flex justify-between items-center w-screen'>
      <div className="left w-[40%]">
        <h1 className='text-2xl font-bold p-2'>ANISH KUMAR SINHA</h1>
      </div>
      <div className="menu w-[60%]">
        <ul className='flex space-x-4 justify-end items-center w-[100%]'>
          <li className='w-16 text-center'>
            <NavLink
              to="/"
              className='text-lg duration-150 hover:text-xl flex items-center justify-center text-center'
            >
              Home
            </NavLink>
          </li>
          <li className='w-[9%] text-center p-1'>
            <NavLink
              to="/about"
              className='text-lg duration-150 hover:text-xl'
            >
              About
            </NavLink>
          </li>
          <li className='w-[9%] text-center p-1'>
            <NavLink
              to="/resume"
              className='text-lg duration-150 hover:text-xl'
            >
              Resume
            </NavLink>
          </li>
          <li className='w-[9%] text-center p-1'>
            <NavLink
              to="/skills"
              className='text-lg duration-150 hover:text-xl'
            >
              Skills
            </NavLink>
          </li>
          <li className='w-[9%] text-center p-1'>
            <NavLink
              to="/projects"
              className='text-lg duration-150 hover:text-xl'
            >
              Projects
            </NavLink>
          </li>
          <li className='w-[9%] text-center p-1'>
            <NavLink
              to="/contact"
              className='text-lg duration-150 hover:text-xl'
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
