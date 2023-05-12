import Child from "./Child"

export interface FatherProps {
    name: string
    lastName: string
}

export default function Father(props: any) {
    return (
        <div>
            <h1 className={`text-xl font-bold`}>
                {props.name} {props.lastName}
            </h1>
            <ul className={`list-disc ml-12`}>
                <Child name="Pedro" lastName={props.lastName}/>
                <Child name="João" lastName={props.lastName}/>
                <Child name="Henrique" lastName={props.lastName}/>
                <Child name="Márcio" lastName={props.lastName}/>
            </ul>
        </div>
    )
}