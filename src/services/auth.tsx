const SERVICE = "auth";

export const login = async (username: string, password: string) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${SERVICE}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        return data; // Assuming the API returns user data or a token
    } catch (error) {
        console.error("Login error:", error);
        throw error; // Propagate the error to be handled by the caller
    }
}

export const checkToken = async (token: string) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${SERVICE}/me`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });

        const data = await response.json();
        return data; // Assuming the API returns user data or a token
    } catch (error) {
        console.error("Check token error:", error);
        throw error;
    }
}

