import { useEffect } from "react"
import { checkToken } from "../../services/auth.service"
import Cookies from "js-cookie"
import { useUserStore } from "../../store/user.store"

const AuthInitializer = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const initializeAuth = async () => {
            const user = await checkToken(Cookies.get("jwt_token"))

            if (user) {
                useUserStore.setState({
                    id: user.id || 0,
                    email: user.email || "",
                    firstName: user.firstName || "",
                    lastName: user.lastName || "",
                    username: user.username || "",
                    gender: user.gender || "",
                    image: user.image || "",
                    role: user.role || "",
                    accessToken: user.accessToken || "",
                    refreshToken: user.refreshToken || "",
                    isCheckingUser: false,
                })
            }

        }
        initializeAuth()
    }, [])
    return <>{children}</>
}

export default AuthInitializer
