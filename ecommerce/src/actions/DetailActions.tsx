import axios from "axios";
import { Dispatch } from "react";
import { DetailActionTypes, DETAILS_LOADING, DETAILS_LOADING_FAIL, DETAILS_LOADING_SUCCESS } from "../types/DetailActionTypes";

const getDetails = (id: any) => {
    console.log(id)
    return async (dispatch: Dispatch<DetailActionTypes>) => {
        dispatch({
            type: DETAILS_LOADING,
            loading: false,
            error: "",
            product: {
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
        });

        try{
            const {data} = await axios.get(`http://localhost:8080/api/products/${id}`)
            console.log(data)
            dispatch({
                type: DETAILS_LOADING_SUCCESS,
                loading: true,
                error: "",
                product: data
            })
        }catch(err){
            dispatch({
                type: DETAILS_LOADING_FAIL,
                loading: true,
                error: err.message,
                product: {
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
}

export default getDetails;