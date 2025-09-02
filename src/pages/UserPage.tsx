import { useParams } from "react-router-dom"
import BaseLayout from "../components/layout/BaseLayout"
import { useEffect, useState } from "react"
import type { User } from "../types/user.type"
import { index as indexUser } from "../services/users.service"
import UserProfile from "../components/users/UserProfile"

const UserPage = () => {
    const { id } = useParams()
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const fetchUser = async () => {
            if (id) {
                const userData = await indexUser(id)
                setUser(userData)
            }
        }

        fetchUser()
    }, [id])

    return (
        <BaseLayout>
            <div className="bg-white/40 rounded-4xl px-16 py-12">
                {user ? <UserProfile user={user} /> : "Loading..."}
            </div>
        </BaseLayout>
    )
}

export default UserPage
