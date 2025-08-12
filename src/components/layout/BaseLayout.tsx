import Navbar from "../Navbar"

const BaseLayout = ({ children }: { children: React.ReactNode }) => (
    <main className="bg-gradient page-container">
        <Navbar />
        {children}
    </main>
)

export default BaseLayout
