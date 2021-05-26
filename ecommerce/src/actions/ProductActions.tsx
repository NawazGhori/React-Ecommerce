import axios from "axios";
import { Dispatch } from "redux";
import { ProductActionTypes, PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../types/ProductActionTypes";

const getProducts = () => {
    return async (dispatch: Dispatch<ProductActionTypes>) => {
        dispatch({
            type: PRODUCTS_LOADING,
            error: "",
            loading: false,
            products: []
        })

        try {
            const res = await axios.get("http://localhost:8080/api/products");
            const {data} = res
            dispatch({
                type: PRODUCTS_LOADING_SUCCESS,
                error: "",
                loading: true,
                products: data
            })
    
        }catch (err) {
            dispatch({
                type: PRODUCTS_LOADING_FAIL,
                error: err.message,
                loading: true,
                products: []
            })
        }
    }

}

export default getProducts;