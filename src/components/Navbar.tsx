import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul className="flex justify-between bg-white px-8 py-6 rounded-full">
                <li>
                    <Link to="/" className="text-xl font-bold text-gradient">REACT USER MANAGER</Link>
                </li>
                <li>
                    <Link to="/login" className="btn-primary text-xl font-semibold">LOGIN</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
