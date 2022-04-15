import { useContext } from 'react';
import Layout from './components/Layout/Layout';
import CartContext from './store/CartContext';

function App() {
    const ctx = useContext(CartContext);

    return <Layout />;
}

export default App;
