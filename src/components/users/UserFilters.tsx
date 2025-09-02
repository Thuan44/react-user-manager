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
    const debounceRef = useRef<number | null>(null)

    useEffect(() => {
        setLocalValue(filter.value)
    }, [filter.value])

    const handleChangeAfterDelay = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setLocalValue(value)
        if (debounceRef.current) window.clearTimeout(debounceRef.current)
        debounceRef.current = window.setTimeout(() => {
            onChange({ key: "username", value })
        }, 500)
    }

    return (
        <div className="bg-white/90 mb-8 rounded-full p-4 flex items-center gap-4">
            <input
                type="text"
                placeholder="Search username..."
                className="border border-gray-300 p-2 w-[300px]"
                onChange={handleChangeAfterDelay}
                value={localValue}
            />
        </div>
    )
}

export default UserFilters
