import type { User } from "../../types/user.type"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const UserItem = ({ user }: { user: User }) => {
    return (
        <Link to={`/users/${user.id}`} className="bg-white/70 rounded-4xl px-6 py-4 grid grid-cols-6 lg:grid-cols-12 gap-y-2 items-center transition-all duration-200 hover:bg-white hover:shadow-md">
            <div className="col-span-1">
                <img src={user.image} alt="" className="size-8" />
            </div>
            <div className="flex items-center col-span-4 lg:col-span-2 font-semibold">
                {user.firstName} {user.lastName}
            </div>
            <div className="col-span-2 hidden lg:block">
                <span className="text-[12px] mr-2">aka</span>
                <span className="font-semibold">{user.username}</span>
            </div>
            <div className="col-span-1 ml-auto lg:ml-0">
                <span className="text-[12px] mr-2">Âge : </span>
                <span className="font-semibold">{user.age}</span>
            </div>
            <div className="col-span-1 lg:hidden"></div>
            <div className="col-span-4 lg:col-span-5">
                <span className="text-[12px] mr-2">Email : </span>
                <span className="font-semibold">
                    {user.email.length > 20
                        ? user.email.slice(0, 20) + "..."
                        : user.email}
                </span>
            </div>
            <div className="flex items-center gap-4">
                {['admin', 'moderator'].includes(user.role) && (
                    <FontAwesomeIcon
                        icon={faUserTie}
                        className={`ml-auto ${user.role === 'moderator' ? 'text-blue-500' : 'text-red-500'}`}
                    />
                )}
            </div>
        </Link>
    )
}

export default UserItem
