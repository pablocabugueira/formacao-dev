import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).send(`
        <html>

            <head>

                <style>
                    body {
                        background-color: black;

                        color: white;
                        font-size: 48px;
                        font-family: Arial, Helvetica, sans-serif;
                    }

                    div {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 98.38vh;
                    }
                </style>
            </head>

            <body>
                <div>
                    <span>Hora Atual: &#160</span>
                    ${new Date().toLocaleTimeString("pt-BR")}
                </div>
            </body>

        </html>
    `)
}