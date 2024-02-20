import '../styles/Cart.css'

/** to do */

function truncateString(str, maxLength) { 
    if (str.length > maxLength) { 
        return str.slice(0, maxLength - 3) + '...'; 
    } 
    return str; 
} 

export default function Cart({ productsData, cartData, handleInputChange }) {
    const MAX_LENGTH = 25;

    if (cartData.length > 0) {
        const cartItems = cartData.map(({productId, quantity}) => {
            const product = productsData.find((item) => item.id === productId);
            return (
                <div className="productRow" key={productId}>
                    <input name='inputQuantity' type='number' value={quantity} min={1} max={99} onChange={(event) => {handleInputChange(event, productId)}}/>
                    <p>{truncateString(product.title, MAX_LENGTH)}</p>
                </div>
            );
        });

        return (
            <>
                {cartItems}
            </>
        )
    } else {
        return (
            <>
                <p>Start adding some items!</p>
            </>
        )
    }
}