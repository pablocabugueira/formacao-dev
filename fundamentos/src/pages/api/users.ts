import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
    { nome: "João Cleber", idade: "19" },
    { nome: "Vera Lúcia", idade: "56" }
  ])
}