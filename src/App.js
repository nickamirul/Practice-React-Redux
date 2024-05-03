import { useDispatch, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { showCartSliceAction } from './slice/showCartSlice';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './slice/cart-action';

//change directory because separate file 
// import { sendCartData } from './slice/cart-slice';

let isInitial = true;

function App() {

  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.showCart.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state => state.showCart.notification))

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {

    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }

    // const sendCartData = async () => {

    //original code before use thunk, it go inside cart-slice file
    // dispatch(showCartSliceAction.showNotification({
    //   status: 'pending',
    //   title: 'sending...',
    //   message: 'sending cart data!',
    // }))
    // const response = await fetch('https://redux-practice-6b085-default-rtdb.firebaseio.com/cart.json', { method: 'PUT', body: JSON.stringify(cart) });

    // if (!response.ok) {
    //   throw new Error('Sending cart data failed.');

    // }

    // const responseData = await response.json();

    // dispatch(showCartSliceAction.showNotification({
    //   status: 'success',
    //   title: 'Success!!',
    //   message: 'Send cart data successfull!',
    // }))
    //};
    // if(isInitial){
    //   isInitial =  false;
    //   return;
    // }

    // sendCartData().catch((error) => {
    //   dispatch(showCartSliceAction.showNotification({
    //     status: 'error',
    //     title: 'Error',
    //     message: 'Sending cart data! failed',
    //   }))
    // });

  }, [cart, dispatch])

  return (
    <>
      {notification && (<Notification status={notification.status} title={notification.title} message={notification.message} />)}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
