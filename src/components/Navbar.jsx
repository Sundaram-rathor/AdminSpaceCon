import { Link } from 'react-router-dom'

const Navbar = () => {
    // to be fetched from backend
    const isAdmin = true;
  return (
    <div>
      <div className='flex justify-around items-center px-10 py-5 bg-gradient-to-br from-violet-700 to-fuchsia-800 text-white'>
        <div className='flex gap-1 text-3xl'>
            <img src="" alt="logo" />
            Spacecon🚀
        </div>
        <ul className='flex gap-10 text-xl '>
            <Link to="/about"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            <Link to="/login"><li>Login</li></Link>
            {isAdmin && <Link to="/admin"><li>Admin</li></Link>}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
