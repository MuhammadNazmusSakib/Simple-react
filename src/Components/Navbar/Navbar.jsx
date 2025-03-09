

import { X, Menu } from 'lucide-react';
import { useState } from "react"
import { Link } from 'react-router-dom';




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="bg-gray-100 p-5 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex place-content-between items-center">
        <Link to="/" className="font-bold text-2xl text-gray-800">My Logo</Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <ul className={`bg-gray-100 w-full items-center py-3 md:w-auto md:flex md:flex-row absolute md:static top-16 left-0 flex-col gap-4 ${isOpen ? 'flex' : 'hidden'}`}>
          <li className="">
            <Link to="/" className="font-semibold text-gray-700 hover:text-gray-950">Home</Link>
          </li>
          <li className="">
            <Link to="/about" className="font-semibold text-gray-700 hover:text-gray-950">About</Link>
          </li>
          <li className="">
            <Link to="/service" className="font-semibold text-gray-700 hover:text-gray-950">Service</Link>
          </li>
          <div className="md:hidden">
            <button className="px-4 py-2 w-full rounded-md font-semibold bg-purple-600">Sign In</button>
          </div>

        </ul>
        <div className="hidden md:block">
          <button className="px-4 py-2 rounded-md font-semibold bg-purple-600">Sign In</button>
        </div>
      </div>
    </nav>
  )
}
export default Navbar

