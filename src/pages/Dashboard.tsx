import { useNavigate } from "react-router-dom"
import BaseLayout from "../components/layout/BaseLayout"
import { useUserStore } from "../store/user.store"
import type { UserStore } from "../types/user.type"
import { useEffect, useState } from "react"
import { index as indexUsers } from "../services/users.service"
import UserList from "../components/users/UserList"

const Dashboard = () => {
    const user = useUserStore((state: UserStore) => state)
    const [users, setUsers] = useState([])
    const isLoggedIn = user.id > 0
    const isCheckingUser = user.isCheckingUser
    const navigate = useNavigate()

    useEffect(() => {
        if (isCheckingUser) return
        if (!isLoggedIn) navigate("/login")
    }, [isLoggedIn, isCheckingUser])

    useEffect(() => {
        if (isCheckingUser) return
        const getListUsers = async () => {
            try {
                const { users: listUsers } = await indexUsers()
                if (listUsers?.length > 0) setUsers(listUsers)
            } catch (error) {
                console.error("Error fetching users:", error)
            }
        }
        getListUsers()
    }, [isCheckingUser])

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
                {users?.length > 0 ? (
                    <UserList users={users} />
                ) : (
                    <p>No users found.</p>
                )}
            </div>
        </BaseLayout>
    )
}

export default Dashboard
