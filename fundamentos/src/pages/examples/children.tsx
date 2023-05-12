import Box from "@/components/examples/children/Box";
import Grid from "@/components/examples/children/Grid";
import Page from "@/components/templates/Page";

export default function children() {
    return (
        <Page>
            <Grid>
                <Box><b>#1</b></Box>
                <Box><b>#2</b></Box>
                <Box><b>#3</b></Box>
                <Box><b>#4</b></Box>
                <Box><b>#5</b></Box>
                <Box><b>#6</b></Box>
                <Box><b>#7</b></Box>
                <Box><b>#8</b></Box>
                <Box><b>#9</b></Box>
            </Grid>
        </Page>
    )
}