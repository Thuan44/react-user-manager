import { create } from "zustand"
import type { UserStore } from "../types/user"

export const useUserStore = create<UserStore>((set) => ({
    email: "",
    id: 0,
    firstName: "",
    lastName: "",
    username: "",
    gender: "",
    image: "",
    accessToken: "",
    refreshToken: "",
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
