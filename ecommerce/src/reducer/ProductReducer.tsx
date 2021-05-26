import Product from "../model/Product";
import { ProductActionTypes, PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../types/ProductActionTypes";

interface IState{
    loading:boolean;
    products:Product[];
    error:string;
}

const initialState:IState ={
    loading:false,
    products:[],
    error:""
}

const productReducer = (state=initialState,action:ProductActionTypes)=>{
    switch(action.type){
        case PRODUCTS_LOADING:
        case PRODUCTS_LOADING_SUCCESS:
        case PRODUCTS_LOADING_FAIL:
            return{
                ...state,
                loading: action.loading,
                products: action.products,
                error: action.error
            }
        default:
            return state;
    }
}

export default productReducer;