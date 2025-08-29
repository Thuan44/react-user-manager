const SERVICE = "auth";

export const login = (username: string, password: string) => {
    return fetch(`${import.meta.env.VITE_API_URL}/${SERVICE}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error("Login error:", error);
            throw error;
        });
}

export const checkToken = (token: string) => {
    return fetch(`${import.meta.env.VITE_API_URL}/${SERVICE}/me`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error("Check token error:", error);
            throw error;
        });
}

