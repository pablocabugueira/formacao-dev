export interface ChildProps {
    name: string
    lastName: string
}

export default function Child(props: ChildProps) {
    return (
        <li>
            {props.name} {props.lastName}
        </li>
    )
}