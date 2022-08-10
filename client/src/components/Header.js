import React from 'react'

const Header = () => {
  return (
    <div className="navbar">
      <div className="container">
        <h3 className='logo'>DropIt</h3>
        {/* <form action="" className="search">
          <input type="text" placeholder='Search' />
          <button>Search</button>
        </form> */}
        <ul className="menuItems">
          <li className="items">Services</li>
          <li className="items">About</li>
          <li className="items">Contact</li>
          <li className="items"><button>Login</button></li>
          <li className="items"><button>Register</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header