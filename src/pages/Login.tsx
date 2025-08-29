import { useEffect } from "react"
import LoginForm from "../components/auth/LoginForm"
import BaseLayout from "../components/layout/BaseLayout"
import { useUserStore } from "../store/user.store"
import type { UserStore } from "../types/user.type"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const user = useUserStore((state: UserStore) => state)
    const isLoggedIn = user.id > 0
    const navigate = useNavigate()

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
