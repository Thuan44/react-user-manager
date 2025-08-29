import { useNavigate } from "react-router-dom"
import BaseLayout from "../components/layout/BaseLayout"
import { useUserStore } from "../store/user.store"
import type { UserStore } from "../types/user"
import { useEffect } from "react"

const Dashboard = () => {
    const user = useUserStore((state: UserStore) => state)
    const navigate = useNavigate()
    const isLoggedIn = user.id > 0

    useEffect(() => {
        if (!isLoggedIn) navigate("/login")
    }, [isLoggedIn])

    return (
        <BaseLayout>
            <h1>Hello {isLoggedIn ? user.firstName : "Guest"}!</h1>
            {isLoggedIn ? (
                <p>Welcome back!</p>
            ) : (
                <p>Please log in to access your dashboard.</p>
            )}
        </BaseLayout>
    )
}

export default Dashboard
