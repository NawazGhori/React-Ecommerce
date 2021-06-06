import Product from "../model/Product";
import { DetailActionTypes, DETAILS_LOADING, DETAILS_LOADING_FAIL, DETAILS_LOADING_SUCCESS } from "../types/DetailActionTypes";

interface  IState {
    loading: boolean;
    product: Product;
    error: string;
}

const initialState: IState ={
    loading: false,
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
    },
    error: ""
}

const detailReducer = (state=initialState,action:DetailActionTypes):IState=>{
    switch(action.type){
        case DETAILS_LOADING:
        case DETAILS_LOADING_SUCCESS:
        case DETAILS_LOADING_FAIL:
            return{
                ...state,
                loading: action.loading,
                product: action.product,
                error: action.error
            }
        default:
            return state;
    }
}

export default detailReducer;