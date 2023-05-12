export interface ButtonsProps {
    changeValue: (newValue: string) => void
}

export default function Buttons(props: ButtonsProps) {
    return (
        <div className="flex gap-5">
            <button
            className="button"
            onClick={() => props.changeValue("João")}
            >
                João
            </button>

            <button
            className="button"
            onClick={() => props.changeValue("Julia")}
            >
                Julia
            </button>

            <button
            className="button"
            onClick={() => props.changeValue("Gabriela")}
            >
                Gabriela
            </button>
            
            <button
            className="button"
            onClick={() => props.changeValue("Leo")}
            >
                Leo
            </button>
        </div>
    )
}