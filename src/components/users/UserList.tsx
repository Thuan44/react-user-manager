import type { User } from "../../types/user.type"
import UserItem from "./UserItem"

const UserList = ({ users }: { users: User[] }) => {
    return (
    <div className="bg-white/40 rounded-4xl p-16">
            <h2 className="mb-8">Here is a list of all the users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="mb-4">
                       <UserItem user={user} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList
