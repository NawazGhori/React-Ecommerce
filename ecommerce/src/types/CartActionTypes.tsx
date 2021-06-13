import Cart from "../model/Cart";

export const ADD_ITEM:string = "ADD_ITEM";

export interface CartAsync{
    selectedItem: Cart;
}

export interface CartAddItem extends CartAsync{
    type : typeof ADD_ITEM;
}

export type CartActionTypes = CartAddItem;