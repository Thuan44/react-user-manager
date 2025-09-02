import { useParams } from "react-router-dom"
import BaseLayout from "../components/layout/BaseLayout"
import { useEffect, useState } from "react"
import type { User, UserStore } from "../types/user.type"
import { index as indexUser } from "../services/users.service"
import UserProfile from "../components/users/UserProfile"
import { useUserStore } from "../store/user.store"
import { edit as editUser } from "../services/users.service"

const UserPage = () => {
    const userStore = useUserStore((state: UserStore) => state)
    const { id } = useParams()
    const [user, setUser] = useState<User | null>(null)
    const isCheckingUser = userStore.isCheckingUser
    const [edit, setEdit] = useState(false)

    const handleEdit = async (firstName: string, lastName: string) => {
        if (user?.id) {
            const updatedUser = await editUser(user.id, {
                firstName,
                lastName,
            })
            setUser(updatedUser)
            setEdit(false)
        }
    }

    useEffect(() => {
        if (isCheckingUser) return
        const fetchUser = async () => {
            if (id) {
                const userData = await indexUser(id)
                setUser(userData)
            }
        }

        fetchUser()
    }, [id, isCheckingUser])

    return (
        <BaseLayout>
            <div className="bg-white/40 rounded-4xl px-16 py-12">
                {user ? (
                    <UserProfile
                        user={user}
                        onEdit={handleEdit}
                        edit={edit}
                        setEdit={setEdit}
                    />
                ) : (
                    "Loading..."
                )}
            </div>
        </BaseLayout>
    )
}

export default UserPage
