import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Account from './components/Account/Account';
import Cart from './components/Cart/Cart';
import Deals from './components/Deals/Deals';
import Layout from './components/Layout/Layout';
import Layout2 from './components/Layout/Layout2';
import Login from './components/Login/login';
import Main from './components/Main/Main';
import { accountAsideBoxInfo, avatarkaImg, checkboxElInfo, food, restaurants, ReviewInfo, Users } from './redux/state';


function App() {
  //accaunt photo
  const [selectedImage, setSelectedImage] = useState(avatarkaImg);

  //cart
  const [cartFoods, setCartFoods] = useState([]);

  const passSetCartFoods = (x) => {
    setCartFoods(x)
  }

  const removeFoodCart = (id) => {
    setCartFoods(cartFoods
      .filter(el => el.id !== id));
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout removeFoodCart={removeFoodCart} cartFoods={cartFoods} selectedImage={selectedImage} />}>
            <Route path='/Main'
              element={<Main food={food} res={restaurants} cartFoods={cartFoods} setCartFoods={passSetCartFoods} />} />
            <Route path='/Deals'
              element={<Deals />} />
            <Route path='/Cart'
              element={<Cart
                cartFoods={cartFoods} removeFoodCart={removeFoodCart} setCartFoods={passSetCartFoods} />} />
            <Route path="/Account"
              element={<Account accountAsideBoxInfo={accountAsideBoxInfo} checkboxElInfo={checkboxElInfo} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />} />
          </Route>
          <Route path="/" element={<Layout2 />}>
            <Route index
              element={<Login ReviewInfo={ReviewInfo} Users={Users} />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
