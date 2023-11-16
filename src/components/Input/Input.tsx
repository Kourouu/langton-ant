import { Dispatch, SetStateAction } from "react"

export const Input = ({handleChange}: { handleChange: Dispatch<SetStateAction<number>>}) => {
    return (
    <input
        type="number"
        onInput={(e) => handleChange(parseInt(e.currentTarget.value, 10))}
    />
    )
}

