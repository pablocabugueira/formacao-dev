export interface LineProps {
    children: any
}

export default function Line(props: LineProps) {
    return (
        <div className={`flex justify-center gap-20 flex-wrap`}>
            {props.children}
        </div>
    )
}