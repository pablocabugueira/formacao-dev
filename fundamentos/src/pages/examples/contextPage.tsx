import Change from "@/components/examples/contextEx/Change";
import Display from "@/components/examples/contextEx/Display";
import Page from "@/components/templates/Page";

export default function statePage() {
    return (
        <Page>
            <div className="flex flex-col gap-5 items-center">
                <Display />
                <Change />
            </div>
        </Page>
    )
}