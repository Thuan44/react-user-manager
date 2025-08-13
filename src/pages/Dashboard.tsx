import BaseLayout from "../components/layout/BaseLayout"
import { useUserStore } from "../store/user.store"
import type { UserStore } from "../types/user"

const Dashboard = () => {
    const user = useUserStore((state: UserStore) => state)
    const isLoggedIn = user.id > 0

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
