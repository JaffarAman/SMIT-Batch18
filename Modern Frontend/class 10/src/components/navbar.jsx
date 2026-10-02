import { Link, NavLink } from "react-router-dom"
import style from "./navbar.module.css"

const Navbar = () => {


    const targetClass = ({ isActive }) => isActive ? style.activeLink : style.navLinks

    return (
        <div>
            {/* <Link className={style.navLinks} to={"/"} >Home</Link>
            <Link to={"/about"} className={style.navLinks} >About</Link>
            <Link to={"/contact"} className={style.navLinks} >Contact</Link> */}


            <NavLink

                className={targetClass}

                to={"/"}>
                Home
            </NavLink>



            <NavLink
                className={({ isActive }) => isActive ? style.activeLink : style.navLinks}
                to={"/about"}>About</NavLink>


            <NavLink to={"/contact"} className={({ isActive }) => isActive ? style.activeLink : style.navLinks} >Contact</NavLink>

            <NavLink to={"/product"} className={({ isActive }) => isActive ? style.activeLink : style.navLinks} >Product</NavLink>




            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a> */}
        </div>
    )
}

export default Navbar
