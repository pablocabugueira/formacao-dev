import ContextCounter from "@/data/contexts/ContextCounter"
import { useContext } from "react"

export default function Change() {
    const { inc, dec } = useContext(ContextCounter)

    return (
        <div className="flex gap-5 text-2xl font-bold">
            <button
                className="button"
                onClick={dec}
            >
                -1
            </button>
            <button
                className="button"
                onClick={inc}
            >
                +1
            </button>
        </div>
    )
}