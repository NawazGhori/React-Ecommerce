import axios from "axios";
import { Dispatch } from "redux"
import { ADD_ITEM, CartActionTypes, DELETE_ITEM } from "../types/CartActionTypes"

const addCartItem = (id: string, qty: any) => {
    return async (dispatch: Dispatch<CartActionTypes>, getState: () => any) => {
        try {
            const { data } = await axios.get(`http://localhost:8080/api/products/${id}`);
            data["qty"] = qty;
            dispatch({
                type: ADD_ITEM,
                id: id,
                selectedItem: data
            })
            //access the final result (state) and store into local storage
            window.localStorage.setItem("cart", JSON.stringify(getState().cart.finalArray));
        } catch (error) {
            dispatch({
                type: ADD_ITEM,
                id:"",
                selectedItem: {
                    "_id": "",
                    "name": "",
                    "brand": "",
                    "price": 0,
                    "qty": 0,
                    "countInStock": 0,
                    "image": "",
                    "rating": 0,
                    "description": "",
                    "numReviews": 0
                }
            })
        }
    }
};

export const deleteCartItem = (id: string) => {
    return (dispatch: Dispatch<CartActionTypes>, getState: () => any) => {
        dispatch({
            type: DELETE_ITEM,
            id: id,
            selectedItem: {
                "_id": "",
                "name": "",
                "brand": "",
                "price": 0,
                "qty": 0,
                "countInStock": 0,
                "image": "",
                "rating": 0,
                "description": "",
                "numReviews": 0
            }
        })
        window.localStorage.setItem("cart",JSON.stringify(getState().cart.finalArray));
    }
}
export default addCartItem;