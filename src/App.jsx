import React from 'react';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import './App.css';
import SuperCoin from './Components/SuperCoin'; // Import SuperCoin

const App = () => {
    return (
        <div><h1 className='app-heading'>E-Commerce Application</h1><ProductList /><ShoppingCart /><SuperCoin /> {/* Include the SuperCoin component here */}
        </div>
    );
};

export default App;