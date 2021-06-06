import Product from "../model/Product";

export const DETAILS_LOADING:string = "DETAILS_LOADING";
export const DETAILS_LOADING_SUCCESS:string = "DETAILS_LOADING_SUCCESS";
export const DETAILS_LOADING_FAIL:string = "DETAILS_LOADING_FAIL";

interface DetailAsync{
    loading:boolean;
    product:Product;
    error: string;
}

interface DetailsLoading extends DetailAsync {
    type: typeof DETAILS_LOADING;
}

interface DetailsLoadingSuccess extends DetailAsync{
    type: typeof DETAILS_LOADING_SUCCESS;
}

interface DetailsLoadingFail extends DetailAsync{
    type: typeof DETAILS_LOADING_FAIL;
}

export type DetailActionTypes = DetailsLoading | DetailsLoadingSuccess | DetailsLoadingFail;