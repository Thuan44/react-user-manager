import { useNavigate } from "react-router-dom"
import BaseLayout from "../components/layout/BaseLayout"
import { useUserStore } from "../store/user.store"
import type { UserStore } from "../types/user"
import { useEffect } from "react"

const Dashboard = () => {
    const user = useUserStore((state: UserStore) => state)
    const isLoggedIn = user.id > 0
    const isCheckingUser = user.isCheckingUser
    const navigate = useNavigate()
    
    useEffect(() => {
        if (isCheckingUser) return
        if (!isLoggedIn) navigate("/login")
    }, [isLoggedIn, isCheckingUser])

    if (isCheckingUser) {
        return <BaseLayout><p>Loading...</p></BaseLayout>
    }
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
