import {useEffect} from 'react'
import logo from "../../assets/images/logo.png"
import { Link,NavLink } from 'react-router-dom'

const navlinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/services',
        display: 'Services'
    },
    {
        path: '/doctors',
        display: 'Find a Doctor'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
    // {
    //     path: '/login',
    //     display: 'Login'
    // },
    // {
    //     path: '/register',
    //     display: 'Register'
    // }
]

const Header = () => {
  return (
    <header className='header flex items-center'>
        <div className="container">
            <div className='flex items-center justify-between'>
                <div>
                    <img src={logo} alt="" />
                </div>


                <div className='navigation'>
                    <ul className='menu flex items-center gap-[2.7rem]'>
                        {
                            navlinks.map((link,index) => (
                                <li key={index}>
                                    <NavLink to={link.path} className={navClass => navClass.isActive? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[600]'} exact>{link.display}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;