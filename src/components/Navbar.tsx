import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/user.store";
import type { UserStore } from "../types/user";
import Cookies from "js-cookie"
    
const Navbar = () => {
    const user = useUserStore((state: UserStore) => state);
    const isLoggedIn = user.id > 0;
    const navigate = useNavigate();

    const logout = () => {
        user.clearUser();
        Cookies.remove("jwt_token");
        navigate("/login");
    }

    return (
        <nav>
            <ul className="flex justify-between bg-white px-8 py-6 rounded-full">
                <li>
                    <Link to="/" className="text-xl font-bold text-gradient">REACT USER MANAGER</Link>
                </li>
                <li>
                    {isLoggedIn ? (
                        <button className="btn-primary text-xl font-semibold" onClick={logout}>LOGOUT</button>
                    ) : (
                        <Link to="/login" className="btn-primary text-xl font-semibold">LOGIN</Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
