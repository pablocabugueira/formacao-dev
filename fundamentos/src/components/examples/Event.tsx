import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function Event() {
    const [value, setValue] = useState(0)

    function increment() {
        setValue(value + 1)
    }

    function decrement() {
        setValue(value - 1)
    }

    return (
        <div className={`
            flex flex-col gap-3
        `}>
            <span className="text-4xl"><b>Valor: </b>{value}</span>
            <div className="flex items-center justify-center gap-4">
                <button onClick={decrement}>
                    <IconMinus />
                </button>
                <button onClick={increment}>
                    <IconPlus />
                </button>
            </div>
        </div>
    )
}