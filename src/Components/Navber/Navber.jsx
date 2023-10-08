import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Navber = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleSignOut = ()=>{
        logOut()
        .then()
        .catch()
    }
    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About us</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
    </>
    return (
        <div className="bg-pink-200">
            <div className="navbar  container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                {navlinks}
                </ul>
                </div>
                <a className="text-3xl font-norican font-bold">Social <span className="text-pink-500">Events</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user? <button onClick={handleSignOut} className="btn bg-pink-500 text-white">Sign Out</button>
                    :<Link to="/login"><button className="btn bg-pink-500 text-white">Login</button></Link>
                }
                
            </div>
            </div>
        </div>
    );
};

export default Navber;