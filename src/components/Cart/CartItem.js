import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { counterCartActions } from '../../slice/counterCartSlice';
import { cartActions } from '../../slice/cart-slice';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counterCart.counterCart);

  const { title, quantity, total, price, id} = props.item;

  const handleIncrease = (event) => {
    // event.preventDefault();

    dispatch(counterCartActions.increaseCart());
  }

  const handleDecrease = (event) => {
    // event.preventDefault();

    dispatch(counterCartActions.decreaseCart());
  }

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
    }))
  }

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {/* ${total.toFixed(2) * counter}{' '} */}
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          {/* x <span>{counter}</span> */}
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
