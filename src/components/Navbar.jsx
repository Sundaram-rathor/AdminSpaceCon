import { Link } from 'react-router-dom'

const Navbar = () => {
    // to be fetched from backend
    const isAdmin = true;
  return (
    <div>
      <div className='flex justify-around items-center px-10 py-5 backdrop-blur-md text-white'>
        <div className='flex gap-3 text-3xl items-center'>
            <img src="/white-logo.png" alt="logo" className='h-8' />
            Spacecon🚀
        </div>
        <ul className='flex gap-10 text-xl'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/events"><li>Events</li></Link>
            {isAdmin && <Link to="/admin"><li>Admin</li></Link>}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
