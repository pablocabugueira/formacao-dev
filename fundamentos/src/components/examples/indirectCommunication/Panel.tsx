import { useState } from "react";
import Buttons from "./Buttons";

export default function Panel() {
    const [name, setName] = useState("Inicial")

    function changeValue(newValue: string) {
        setName(newValue)
    }

    return (
        <div className="flex flex-col gap-5 items-center">
            <h1 className="text-3xl">{name}</h1>
            <Buttons changeValue={changeValue} />
        </div>
    )
}