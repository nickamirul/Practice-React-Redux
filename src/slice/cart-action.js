
import { cartActions } from "./cart-slice";
import { showCartSliceAction } from "./showCartSlice";

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('https://redux-practice-6b085-default-rtdb.firebaseio.com/cart.json');

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }
            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(
                {
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity,
                }
            ));

        } catch (error) {
            dispatch(showCartSliceAction.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Fetching cart data failed!',
            }));
        }
    };
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(showCartSliceAction.showNotification({
            status: 'pending',
            title: 'sending...',
            message: 'sending cart data!',
        }));

        const sendRequest = async () => {
            const response = await fetch('https://redux-practice-6b085-default-rtdb.firebaseio.com/cart.json', { method: 'PUT', body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity }) });

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        };

        try {
            await sendRequest();

            dispatch(showCartSliceAction.showNotification({
                status: 'success',
                title: 'Success!!',
                message: 'Send cart data successfull!',
            }));

        } catch (error) {
            dispatch(showCartSliceAction.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Sending cart data failed!',
            }));
        }


    }
}