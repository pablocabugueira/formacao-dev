import { NextApiRequest, NextApiResponse } from "next";

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
    const loadingTime = 2000
    const start = Date.now()
    while(Date.now() - start < loadingTime) {}

    res.status(200).json([
        { id: 1, name: "Caneta Preta", price: 2.99 },
        { id: 2, name: "Borracha", price: 5.99 },
        { id: 3, name: "Estojo", price: 12.99 }
    ])
}