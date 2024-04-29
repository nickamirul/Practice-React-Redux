import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';

import { showCartSliceAction } from '../../slice/showCartSlice';
const CartButton = (props) => {
  const dispatch = useDispatch();

  const showCartHandler = (event) => {
    event.preventDefault();

    dispatch(showCartSliceAction.click())
  }

  return (
      <button className={classes.button} onClick={showCartHandler}>
        <span>My Cart</span>
        <span className={classes.badge}>1</span>
      </button>
  );
};

export default CartButton;
