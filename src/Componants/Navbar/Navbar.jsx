
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.jpg';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const NavItems = <>
        <li><NavLink to='/'
            className={({ isActive }) => isActive ? "text-[#23BE0A] font-bold text-lg bg-white WorkSans hover:text-[#23BE0A]" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white hover:bg-[#23BE0A]"}
        >Assignments</NavLink></li>
        {/* <li><NavLink to='/login'
            className={({ isActive }) => isActive ? "text-[#23BE0A] font-bold text-lg bg-white WorkSans hover:text-[#23BE0A]" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white hover:bg-[#23BE0A]"}
        >Login</NavLink></li>
        <li><NavLink to='/allArt&Craft'
            className={({ isActive }) => isActive ? "text-[#23BE0A] font-bold text-lg bg-white WorkSans hover:text-[#23BE0A]" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white hover:bg-[#23BE0A]"}
        >Register</NavLink></li> */}
        {
            user && <li><NavLink to='/createAssignment'
                className={({ isActive }) => isActive ? "text-[#23BE0A] font-bold text-lg bg-white WorkSans hover:text-[#23BE0A]" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white hover:bg-[#23BE0A]"}
            >Create assignment</NavLink></li>
        }
        {/* {
        user && <li><NavLink to='/myArt'
            className={({ isActive }) => isActive ? "text-[#23BE0A] font-bold text-lg bg-white WorkSans hover:text-[#23BE0A]" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white hover:bg-[#23BE0A]"}
        >MyArt&Craft</NavLink></li>
    } */}
        {/* {
        user && <li><NavLink to='/contact'
            className={({ isActive }) => isActive ? "text-[#23BE0A] font-bold text-lg bg-white WorkSans hover:text-[#23BE0A]" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white hover:bg-[#23BE0A]"}
        >Contact Us</NavLink></li>
    } */}
    </>

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar justify-between bg-base-100 px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavItems}
                        </ul>
                    </div>
                    <a className="text-3xl font-bold text-[#131313]">
                        <img className="h-16 w-16" src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavItems}
                    </ul>
                </div>
                <div className="navbar-end w-full md:w-[450px]">
                    {user && (
                        <div className='dropdown dropdown-end z-50'>
                            <div
                                tabIndex={0}
                                role='button'
                                className='btn btn-ghost btn-circle avatar'
                            >
                                <div title={user?.displayName} className='w-10 rounded-full'>
                                    <img
                                        referrerPolicy='no-referrer'
                                        alt='User Profile Photo'
                                        src={user.photoURL}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                            >
                                {/* <li>
                                    <Link to='/addJob' className='justify-between'>Add Job</Link>
                                </li> */}
                                <li>
                                    <Link to='/'>My Posted Jobs</Link>
                                </li>

                                <li className='mt-2'>
                                    <button onClick={handleLogOut} className='bg-gray-200 block text-center'>Logout</button>
                                </li>
                            </ul>
                        </div>
                    )}

                    <div>
                        {
                            user ? "" : <Link to='/register'>
                                <button className="btn mr-5 hover:bg-[#23BE0A] text-lg font-semibold hover:text-white">Register</button>
                            </Link>
                        }
                        {
                            user ? "" : <Link to='/login' className="btn bg-[#23BE0A] text-white hover:bg-[#23BE0A] text-lg font-semibold">Login
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;