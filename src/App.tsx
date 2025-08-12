import { Route, Routes } from "react-router"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import User from "./pages/UserPage"

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    Dashboard
                </Route>
                <Route path="/login" element={<Login />}>
                    Login
                </Route>
                <Route path="/users/:id" element={<User />}>
                    User
                </Route>
            </Routes>
        </div>
    )
}

export default App
