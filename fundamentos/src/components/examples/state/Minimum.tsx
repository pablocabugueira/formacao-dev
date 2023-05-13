import { useState } from "react";

export default function Minimum() {
    const [value, setValue] = useState("")

    return (
        <div className="flex flex-col gap-5 items-center">
            <span className="text-2xl font-black">Exemplo Estado</span>
            <input
                type="text"
                value={value}
                className="input"
                onChange={e => {
                    setValue(e.target.value)
                }}
            />
        </div>
    )
}