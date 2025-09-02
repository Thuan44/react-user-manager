const SERVICE = "users"

export const list = async ({ sort }: { sort: string }) => {
    return fetch(
        `${import.meta.env.VITE_API_URL}/${SERVICE}${
            sort ? `?sortBy=firstName&order=${sort}` : ""
        }`
    )
        .then((res) => res.json())
        .catch((error) => {
            console.error("Error fetching users:", error)
            throw error
        })
}

export const filterUsers = async ({
    filter: { key, value },
    sort,
}: {
    filter: { key: string; value: string }
    sort: string
}) => {
    return fetch(
        `${
            import.meta.env.VITE_API_URL
        }/${SERVICE}/filter?key=${key}&value=${value}${
            sort ? `&sortBy=firstName&order=${sort}` : ""
        }`
    )
        .then((res) => res.json())
        .catch((error) => {
            console.error("Error filtering users:", error)
            throw error
        })
}

export const index = async (id: string) => {
    return fetch(`${import.meta.env.VITE_API_URL}/${SERVICE}/${id}`)
        .then((res) => res.json())
        .catch((error) => {
            console.error("Error fetching user:", error)
            throw error
        })
}

export const edit = async (
    id: number,
    data: { firstName?: string; lastName?: string }
) => {
    return fetch(`${import.meta.env.VITE_API_URL}/${SERVICE}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .catch((error) => {
            console.error("Error updating user:", error)
            throw error
        })
}
