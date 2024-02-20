import '../styles/Product.css'

import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Product({ productInfo, handler }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <div className="productCard">
            {!imageLoaded && <Skeleton height={200} width={200} />}
            <img
                src={productInfo.image}
                alt={productInfo.title}
                style={{ display: imageLoaded ? 'block' : 'none' }}
                onLoad={handleImageLoad}
            />
            <button onClick={() => handler(productInfo.id)}>Add product</button>
        </div>
    );
}
