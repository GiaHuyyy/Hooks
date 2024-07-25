import { useState, useMemo, useRef } from "react";
// useMemo tránh thực hiện 1 logic nào đó không cần thiết trong function component
function UseMemo() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);

    const nameRef = useRef();

    const handleSubmit = () => {
        setProducts((prev) => [...prev, { name, price: +price }]);
        setName("");
        setPrice("");
        nameRef.current.focus();
    };

    const total = useMemo(() => {
        return products.reduce((total, current) => total + current.price, 0);
    }, [products]);

    return (
        <div className="container" style={{ paddingLeft: "50vw" }}>
            <input
                ref={nameRef}
                value={name}
                placeholder="Enter name ..."
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder="Enter price ..."
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
            <p>Total: {total}</p>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UseMemo;
