import { useNavigate } from "react-router-dom"
import BaseLayout from "../components/layout/BaseLayout"
import { useUserStore } from "../store/user.store"
import type { UserStore } from "../types/user.type"
import { useEffect, useState } from "react"
import {
    filterUsers as filterlistUsers,
    index as indexUsers,
} from "../services/users.service"
import UserList from "../components/users/UserList"
import UserFilters from "../components/users/UserFilters"

const Dashboard = () => {
    const user = useUserStore((state: UserStore) => state)
    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState({ key: "", value: "" })
    const isLoggedIn = user.id > 0
    const isCheckingUser = user.isCheckingUser
    const navigate = useNavigate()

    const getListUsers = async () => {
        try {
            const { users: listUsers } = await indexUsers()
            if (listUsers?.length > 0) setUsers(listUsers)
        } catch (error) {
            console.error("Error fetching users:", error)
        }
    }

    const filterUsers = async () => {
        try {
            const { users: filteredUsers } = await filterlistUsers({
                key: filter.key,
                value: filter.value,
            })
            if (filteredUsers?.length > 0) setUsers(filteredUsers)
            else setUsers([])
        } catch (error) {
            console.error("Error filtering users:", error)
        }
    }

    // Check user authentication
    useEffect(() => {
        if (isCheckingUser) return
        if (!isLoggedIn) navigate("/login")
    }, [isLoggedIn, isCheckingUser])

    // Fetch or filter user list
    useEffect(() => {
        if (isCheckingUser) return
        if (!filter.key || !filter.value) {
            getListUsers()
            return
        }
        filterUsers()
    }, [isCheckingUser, filter])

    if (isCheckingUser) {
        return (
            <BaseLayout>
                <div className="text-center">
                    <p>Loading...</p>
                </div>
            </BaseLayout>
        )
    }
    return (
        <BaseLayout>
            <div>
                <div className="text-center mb-12">
                    <h1>Hello {user.firstName} !</h1>
                    {isLoggedIn ? (
                        <p>Welcome back.</p>
                    ) : (
                        <p>Please log in to access your dashboard.</p>
                    )}
                </div>
                <div className="bg-white/40 rounded-4xl px-16 py-12">
                    <UserFilters filter={filter} onChange={setFilter} />
                    {users?.length > 0 ? (
                        <UserList users={users} />
                    ) : (
                        <p>No users found.</p>
                    )}
                </div>
            </div>
        </BaseLayout>
    )
}

export default Dashboard
