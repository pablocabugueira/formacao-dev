import { useState } from "react";

interface Product {
    name: string;
    price: number;
    discount: number
}

export default function Form() {
    const [product, setProduct] = useState<Product>({
        name: "",
        price: 0,
        discount: 0
    })

    return (
        <div className="flex flex-col gap-5 items-end">
            <span className="text-2xl font-black">Exemplo Formulário</span>
            <div>
                <span>Nome: </span>
                <input
                    type="text"
                    value={product.name}
                    className="input"
                    onChange={e => {
                        setProduct({
                            ...product,
                            name: e.target.value
                        })
                    }}
                />
            </div>

            <div>
                <span>Price: </span>
                <input
                    type="number" 
                    value={product.price}
                    className="input"
                    min={0}
                    onChange={e => {
                        setProduct({
                            ...product,
                            price: +e.target.value
                        })
                    }}
                />
            </div>

            <div>
                <span>Discount: </span>
                <input
                    type="number" 
                    value={product.discount}
                    className="input"
                    min={0}
                    max={0.6}
                    step={0.01}
                    onChange={e => {
                        setProduct({
                            ...product,
                            discount: +e.target.value
                        })
                    }}
                />
            </div>

            <div className="flex flex-col gap-2 items-start text-2xl">
                <span>{product.name}</span>
                <span>R$ {product.price}</span>
                <span>Desc: R$ {product.discount}</span>
                <span>Total: R$ {product.price * (1 - product.discount)}</span>
            </div>
        </div>
    )
}