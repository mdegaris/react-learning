import { useState } from 'react';
import Cart from './components/Cart/Cart';
import CartContextProvider from './store/CartProvider';
import Layout from './components/Layout/Layout';

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartContextProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Layout onShowCart={showCartHandler} />
    </CartContextProvider>
  );
}

export default App;
