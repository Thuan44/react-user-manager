const SERVICE = "users"

export const index = async ({ sort }: { sort: string }) => {
    return fetch(`${import.meta.env.VITE_API_URL}/${SERVICE}${
            sort ? `?sortBy=firstName&order=${sort}` : ""
        }`)
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
