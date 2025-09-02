const SERVICE = "users"

export const index = async () => {
    return fetch(`${import.meta.env.VITE_API_URL}/${SERVICE}`)
        .then((res) => res.json())
        .catch((error) => {
            console.error("Error fetching users:", error)
            throw error
        })
}

export const filterUsers = async ({key, value}: {key: string, value: string}) => {
    return fetch(`${import.meta.env.VITE_API_URL}/${SERVICE}/filter?key=${key}&value=${value}`)
        .then((res) => res.json())
        .catch((error) => {
            console.error("Error filtering users:", error)
            throw error
        })
}
