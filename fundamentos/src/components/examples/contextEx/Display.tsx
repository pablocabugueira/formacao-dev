import ContextCounter from "@/data/contexts/ContextCounter"
import { useContext } from "react"

export default function Display() {
    const ctx = useContext(ContextCounter)

    return (
        <div className="text-6xl font-black">
            <span>{ctx.number}</span>
        </div>
    )
}