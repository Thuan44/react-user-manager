import { create } from "zustand"
import type { UserStore } from "../types/user.type"
import { devtools } from "zustand/middleware"

export const useUserStore = create<UserStore>()(
    devtools((set) => ({
        email: "",
        id: 0,
        firstName: "",
        lastName: "",
        username: "",
        gender: "",
        image: "",
        role: "",
        accessToken: "",
        refreshToken: "",
        isCheckingUser: true,
        clearUser: () =>
            set(() => ({
                id: 0,
                email: "",
                firstName: "",
                lastName: "",
                username: "",
                gender: "",
                image: "",
                accessToken: "",
                refreshToken: "",
            })),
    }))
)
