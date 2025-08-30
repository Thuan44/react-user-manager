import { useEffect } from "react"
import { checkToken } from "../../services/auth.service"
import Cookies from "js-cookie"
import { useUserStore } from "../../store/user.store"
import { useNavigate } from "react-router-dom"

const AuthInitializer = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate()

    useEffect(() => {
        const initializeAuth = async () => {
            const token = Cookies.get("jwt_token")
            if (!token) {
                useUserStore.setState({ isCheckingUser: false })
                return
            }
            const user = await checkToken(token)

            if (user?.id) {
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
                return
            }

            Cookies.remove("jwt_token")
            navigate("/login")
        }
        initializeAuth()
    }, [])
    return <>{children}</>
}

export default AuthInitializer
