import { Link } from 'react-router-dom';
import ShopItems from './ShopItems';
import '../styles/Shop.css';

function Shop() {

    return (
        <div className="shopPage">
            <h1>Shop</h1>
            <Link to="/">Back to the home</Link>
            <div className="shopDiv">
                <ShopItems />
            </div>
        </div>
    )
}

export default Shop;