export default function Page(props: any) {
    return (
        <div className={`
            flex flex-col items-center justify-center h-screen w-screen
            text-white bg-[url(https://picsum.photos/1920/1080)] bg-no-repeat
            bg-cover
        `}>
            <div className={`
                flex flex-col h-full w-full bg-black bg-opacity-80 items-center
                justify-center
            `}>
                {props.children}
            </div>
        </div>
    )
}