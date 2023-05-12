export default function Box(props: any) {
    return (
        <div className={`
            flex flex-col p-4 bg-red-400 rounded-xl text-center
        `}>
            {props.children}
        </div>
    )
}