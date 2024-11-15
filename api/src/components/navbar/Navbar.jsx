import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import './navbar.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
            <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102014/netflix_2014.png?itok=qtd05Dk3" alt="" />
            <Link to='/' className='link'>
            <span>Homepage</span>
            </Link>
            <Link to='/series' className='link'>
            <span>Series</span>
            </Link>
            <Link to='/movies' className='link'>
            <span>Movies</span>
            </Link>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        <div className="right">
            <Search className='icon'/>
            <span>KID</span>
            <Notifications className='icon'/>
            <img src="https://images.pexels.com/photos/4126777/pexels-photo-4126777.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="profile">
                <ArrowDropDown className='icon'/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
