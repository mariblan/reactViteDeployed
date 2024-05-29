import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/users'>Users</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
