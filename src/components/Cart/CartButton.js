import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';

import { showCartSliceAction } from '../../slice/showCartSlice';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  const showCartHandler = (event) => {
    event.preventDefault();

    dispatch(showCartSliceAction.click())
  }

  return (
      <button className={classes.button} onClick={showCartHandler}>
        <span>My Cart</span>
        <span className={classes.badge}>{cartQuantity}</span>
      </button>
  );
};

export default CartButton;
