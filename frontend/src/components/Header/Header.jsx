import { useEffect, useRef, useState } from 'react'
import logo from "../../assets/images/logo.png"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import userImg from "../../assets/images/avatar-icon.png"
import { BiMenu } from 'react-icons/bi'
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
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            }
            else {
                headerRef.current.classList.remove('sticky__header');
            }
        });
    }

    useEffect(() => {
        handleStickyHeader();

        return () => window, removeEventListener('scroll', handleStickyHeader);
    });

    const toggleMenu = () => {
        menuRef.current.classList.toggle('show__menu');
    }

    const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Perform logout actions (clear local storage, etc.)
    localStorage.clear();

    // Redirect to the home page
    navigate('/');
  };



    return (
        <header className='flex items-center bg-[url("./assets/images/mask.png")] bg-no-repeat bg-center bg-cover h-[100px] leading-[100px]' ref={headerRef}>
            <div className="container">
                <div className='flex items-center justify-between'>
                    <div>
                        <img src={logo} alt="" />
                    </div>


                    <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                        <ul className='menu flex items-center gap-[2.7rem]'>
                            {
                                navlinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[600]'} exact>{link.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='flex items-center gap-4'>
                        {localStorage.getItem('email') ? (
                            <div className='flex items-center flex-row'>
                                <div onClick={handleMenuClick}>
                                    <figure className='w-[35px] h-[35px] rounded-full flex items-center gap-3'>
                                        <img src={userImg} className='w-full rounded-full cursor-pointer' alt='' />
                                        <h2>{localStorage.getItem('name')}</h2>
                                    </figure>
                                </div>
                                <div>
                                    {/* Dropdown menu */}
                                    {anchorEl && (
                                        <div className='absolute top-12 right-0 bg-white shadow p-2 rounded'>
                                            <button className='block w-full text-left' onClick={handleLogout}>
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <Link to='/login'>
                                <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center rounded-[50px]'>Login</button>
                            </Link>
                        )}
                        <span className='md:hidden' onClick={toggleMenu}>
                            <BiMenu className='w-6 h-7 cursor-pointer'></BiMenu>
                        </span>
                    </div>


                </div>
            </div>
        </header>
    )
}

export default Header;