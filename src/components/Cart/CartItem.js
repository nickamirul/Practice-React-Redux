import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { counterCartActions } from '../../slice/counterCartSlice';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const counter = useSelector(state=>state.counterCart.counterCart);

  const { title, quantity, total, price } = props.item;

  const handleIncrease = (event) => {
    // event.preventDefault();

    dispatch(counterCartActions.increaseCart());
}

const handleDecrease = (event) => {
  // event.preventDefault();

  dispatch(counterCartActions.decreaseCart());
}

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2) * counter}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{counter}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrease}>-</button>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
