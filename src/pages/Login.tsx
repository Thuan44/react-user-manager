import { useEffect } from "react"
import LoginForm from "../components/auth/LoginForm"
import BaseLayout from "../components/layout/BaseLayout"
import { useUserStore } from "../store/user.store"
import type { UserStore } from "../types/user"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const user = useUserStore((state: UserStore) => state)
    const isLoggedIn = user.id > 0

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/")
        }
    }, [isLoggedIn])

    return (
        <BaseLayout>
            <LoginForm />
        </BaseLayout>
    )
}

export default Login
