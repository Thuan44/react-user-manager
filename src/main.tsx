import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"
import AuthInitializer from "./components/auth/AuthInitializer"

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <AuthInitializer>
            <App />
        </AuthInitializer>
    </BrowserRouter>
)
