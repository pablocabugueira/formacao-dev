import Form from "@/components/examples/state/Form";
import Minimum from "@/components/examples/state/Minimum";
import Page from "@/components/templates/Page";

export default function statePage() {
    return (
        <Page>
            <div className="flex flex-col gap-10 items-center">
                <Minimum />
                <Form />
            </div>
        </Page>
    )
}