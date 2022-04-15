import { useState } from 'react';
import DUMMY_CART_ITEMS from './store/dummy-cart';
import Layout from './components/Layout/Layout';

function App() {
    const [cartItems, setCartItems] = useState(DUMMY_CART_ITEMS);

    return <Layout cartItems={cartItems} />;
}

export default App;
