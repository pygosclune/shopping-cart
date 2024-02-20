import { useState, useEffect } from 'react';
import '../styles/ShopItems.css'
import Product from './Product';
import Cart from './Cart';

const fetchShopData = () => {
    const [productsData, setProductsData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", { mode: "cors" })
        .then((res) => {
            if (res.status >= 400) {
                throw new Error("Server error");
            }
            return res.json();
        })
        .then((res) => {
            setProductsData(res)
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }, []);

    return { productsData, error, loading };
}

export default function ShopItems() {
    const { productsData, error, loading } = fetchShopData();
    const [cart, setCart] = useState([]);

    const handleAddItemToCart = (productId) => {
        const existingItemIndex = cart.findIndex(item => item.productId === productId);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            const newCart = [...cart, { productId, quantity: 1 }];
            setCart(newCart);
        }
    };

    const handleQuantityChange = (event, productId) => {
        const newQuantity = parseInt(event.target.value, 10);

        if (!isNaN(newQuantity) && newQuantity >= 0) {
            const updatedCart = cart.map(item =>
                item.productId === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            );

            setCart(updatedCart);
        }
    };

    if (error) return (<p>Error: {error}</p>);

    if (loading) return (<p>Loading...</p>);

    return (
        <>
            <div className='productsDiv'>
                {productsData.map((product) => (
                    <Product key={product.id} productInfo={product} handler={handleAddItemToCart} />
                ))}
            </div>
            <div className='cartDiv'>
                <h2>There are {cart.length} {cart.length === 1 ? "item" : "items"}</h2>
                <Cart productsData={productsData} cartData={cart} handleInputChange={handleQuantityChange}/>
            </div>
        </>
    )
}