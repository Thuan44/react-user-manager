import React, { useState } from "react"
import { login } from "../../services/auth.service"
import Cookies from "js-cookie"
import { useUserStore } from "../../store/user.store"
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setIsLoading(true)

        if (!username || !password) {
            setErrorMsg("Please fill in all fields.")
            setIsLoading(false)
            return
        }

        const userData = await login(username, password)
        console.log("User Data:", userData)

        if (!userData) {
            setErrorMsg("Login failed. Please check your credentials.")
            return
        }
        if (userData.message) {
            setErrorMsg(userData.message)
            return
        }

        // Save accessToken to cookies
        if (userData.accessToken) {
            Cookies.set("jwt_token", userData.accessToken, { expires: 7 })
        }

        // Save user data to zustand store
        useUserStore.setState({
            id: userData.id,
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            username: userData.username,
            gender: userData.gender,
            image: userData.image,
        })

        console.log("User data saved to store:", useUserStore.getState())

        setErrorMsg("") // Clear previous error message
        setIsLoading(false)

        // Redirect to dashboard
        navigate("/");

    }

    return (
        <div className="max-w-md flex flex-col justify-center items-center mx-auto py-16 bg-[#74abc0] p-8 mt-16 rounded-xl drop-shadow-md">
            <h2 className="text-2xl font-bold mb-8 text-white">Login</h2>
            <form onSubmit={handleSubmit}>
                {errorMsg && <p className="text-red-500">{errorMsg}</p>}
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="btn-primary w-[150px] h-[56px] mx-auto"
                >
                    {isLoading ? "Loading..." : "Login"}
                </button>
            </form>
        </div>
    )
}

export default LoginForm
