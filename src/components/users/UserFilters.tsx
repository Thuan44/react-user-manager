import { useRef, useState, useEffect } from "react"

const UserFilters = ({
    filter,
    onChange,
}: {
    filter: { key: string; value: string }
    onChange: React.Dispatch<
        React.SetStateAction<{ key: string; value: string }>
    >
}) => {
    const [localValue, setLocalValue] = useState(filter.value)
    const [localSelect, setLocalSelect] = useState("")
    const debounceRef = useRef<number | null>(null)

    useEffect(() => {
        if (filter?.key === "username") {
            setLocalValue(filter.value)
            setLocalSelect("")
        }
        if (filter?.key === "role") {
            setLocalValue("")
        }
    }, [filter.value])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setLocalValue(value)
        if (debounceRef.current) window.clearTimeout(debounceRef.current)
        debounceRef.current = window.setTimeout(() => {
            onChange({ key: "username", value })
        }, 500)
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLocalSelect(e.target.value)
        onChange({ key: "role", value: e.target.value })
    }

    return (
        <div className="bg-white/90 mb-8 rounded-full p-4 flex items-center gap-4">
            <input
                type="text"
                placeholder="Search username..."
                className="border border-gray-300 p-2 w-[300px]"
                onChange={handleChange}
                value={localValue}
            />
            <select
                name="role"
                id="role"
                onChange={handleSelectChange}
                value={localSelect}
            >
                <option value="">All Roles</option>
                <option value="admin">Admin</option>
                <option value="moderator">Moderator</option>
                <option value="user">User</option>
            </select>
        </div>
    )
}

export default UserFilters
