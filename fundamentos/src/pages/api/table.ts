import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const lines = +(req.query.lines || 10)
    const columns = +(req.query.columns || 10)


    res.status(200).send(`
        <html>

            <head>

                <style>
                    html {
                        background-color: #333;

                        color: #eee;
                    }

                    table {
                        border-collapse: collapse;
                        
                        width: 100%;
                        font-size: 2rem;
                    }
                </style>
            </head>

            <body>
                <table border="1">
                    ${makeTable(columns, lines)}
                </table>
            </body>

        </html>
    `)
}

function makeTable(columns: number, lines: number) {
    let html = ""
    for (let c = 0; c < columns; c++) {
        html += "<tr>"
        for (let l = 0; l < lines; l++) {
            html += `<td>${l + 1}x${c + 1}</td>`
        }
        html += "</tr>"
    }
    return html
}