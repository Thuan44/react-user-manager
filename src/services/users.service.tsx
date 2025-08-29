const SERVICE = "users"

export const index = () => {
    return fetch(`${import.meta.env.VITE_API_URL}/${SERVICE}`)
        .then((res) => res.json())
        .catch((error) => {
            console.error("Error fetching users:", error)
            throw error
        })
}
