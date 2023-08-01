
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
// import Product from './Components/Product/Product';
import Shop from './Components/Shop/Shop';
import OrderReview from './Components/OrderReview/OrderReview';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route exact path='/' element={<Shop/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/review' element={<OrderReview/>}></Route>
          <Route path='/inventory' element={<Inventory/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
