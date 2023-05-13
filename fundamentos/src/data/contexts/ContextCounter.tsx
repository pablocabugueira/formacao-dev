import { createContext, useState } from "react";

interface ContextCounterProps {
    number: number
    inc: () => void
    dec: () => void
}

const ContextCounter = createContext<ContextCounterProps>({
    number: 0,
    inc: () => {},
    dec: () => {},
})

export function ContextCounterProvider(props: any) {
    const [number, setNumber] = useState<number>(0)
    const inc = () => setNumber(number + 1)
    const dec = () => setNumber(number - 1)

    return (
        <ContextCounter.Provider
        value={{
            number,
            inc,
            dec
        }}
        >
            {props.children}
        </ContextCounter.Provider>
    )
}

export default ContextCounter