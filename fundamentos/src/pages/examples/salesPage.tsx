import Page from "@/components/templates/Page";

export async function getStaticProps() {
    const url = "http://localhost:3000/api/sales"
    const resp = await fetch(url)
    const sales = await resp.json()

    const data = new Date().toLocaleTimeString("pt-BR")
    return {
        props: { abc: 123, data, sales },
        revalidate: 30
    }
}

export default function salesPage(props: any) {
    return (
        <Page>
            <div>
                <span>{props.data}</span>
                <ul>
                    {props.sales?.map((prod: any) => {
                        return (
                            <li key={prod.id}>
                                {prod.name} - {prod.price}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Page>
    )
}