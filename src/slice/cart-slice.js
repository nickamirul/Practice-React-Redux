import { createSlice } from "@reduxjs/toolkit";

//move to cart-action file to separate function
// import { showCartSliceAction } from "./showCartSlice"; 

const initialState = {
    items: [],
    totalQuantity: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        replaceCart(state, action){
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)

            state.totalQuantity++;

            if (!existingItem) {
                state.items.push({ id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, name: newItem.title });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id)

            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }

    }
})

//this were move to cart-action file to separate function
//action creator
//thunk, async
// export const sendCartData = (cart) => {
//     return async (dispatch) => {
//         dispatch(showCartSliceAction.showNotification({
//             status: 'pending',
//             title: 'sending...',
//             message: 'sending cart data!',
//         }));

//         const sendRequest = async () => {
//             const response = await fetch('https://redux-practice-6b085-default-rtdb.firebaseio.com/cart.json', { method: 'PUT', body: JSON.stringify(cart) });

//             if (!response.ok) {
//                 throw new Error('Sending cart data failed.');
//             }
//         };

//         try {
//             await sendRequest();

//             dispatch(showCartSliceAction.showNotification({
//                 status: 'success',
//                 title: 'Success!!',
//                 message: 'Send cart data successfull!',
//             }));

//         } catch (error) {
//             dispatch(showCartSliceAction.showNotification({
//                 status: 'error',
//                 title: 'Error',
//                 message: 'Sending cart data! failed',
//             }));
//         }


//     }
// }

export const cartActions = cartSlice.actions;

export default cartSlice;