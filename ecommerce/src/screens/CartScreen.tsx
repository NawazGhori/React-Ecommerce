import React, { Component } from "react";
import { connect } from "react-redux";
import addCartItem, { deleteCartItem } from "../actions/CartActions";
import { match,NavLink } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import { History, LocationState } from "history";

interface IProps {
    match: match<routeParams>;
    location: Location;
    res: any;
    getAddItemResult: any;
    deleteItemResult: any;
    user_details: any;
    history: History<LocationState>;
};

interface IState { };

interface routeParams {
    id: any;
}

class CartScreen extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
    }

    componentDidMount() {
        this.props.getAddItemResult(this.props.match.params.id,
            this.props.location.search ? (Number(this.props.location.search.split("=")[1])) : 1)
    }
    setQty = (id: any, qty: any) => {
        this.props.getAddItemResult(id, Number(qty))
    }
    deleteItem = (id: any) => {
        this.props.deleteItemResult(id)
    }
    checkUser = () => {
        let redirect_url = this.props.user_details.image == "" ? "signin" : "payment"
        console.log(redirect_url)
        this.props.history.push(redirect_url)
    }
    render() {
        const { finalArray } = this.props.res
        console.log(finalArray)
        return (
            <React.Fragment>
                <h1>Shopping Cart</h1>
                <div className="row top">
                    <div className="col-2">
                        {finalArray.length === 0 ?
                            (<MessageBox variant="danger">Cart is Empty. <NavLink to="/" exact={true} strict>Start Shopping</NavLink></MessageBox>) : (
                                <div>
                                    <ul className="cart-list-item">
                                        <li>
                                            <div>Product</div>
                                            <div>Product</div>
                                            <div>Price</div>
                                            <div>Quantity</div>
                                            <div></div>
                                        </li>
                                        {finalArray.map((item: any, index: number) => (
                                            <li key={index} >
                                                <div>
                                                    <img src={item.image} alt={item.name} className="small_img" />
                                                </div>
                                                <div>
                                                    <NavLink to={`/product/${item._id}`}>
                                                        <span>{item.name}</span></NavLink>
                                                </div>
                                                <div>${item.price}</div>
                                                <div>
                                                    <select value={item.qty} onChange={(e: any) => (this.setQty(item._id, e.target.value))}>
                                                        {[...Array(item.countInStock).keys()].map((x: any) => (
                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div>
                                                    <span onClick={() => (this.deleteItem(item._id))}>
                                                        <i className="fa fa-trash" aria-hidden="true"></i></span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        }
                    </div>

                    <div className="col-1">

                        <div className="card">
                            <div className="card-header">
                                <h4>ORDER SUMMARY</h4>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>
                                        <div className="row">
                                            <div>Total Items</div>
                                            <div></div>
                                            <div>{finalArray.reduce((arg1: any, arg2: any) => arg1 + arg2.qty, 0)}</div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row">
                                            <div>Total Price</div>
                                            <div>
                                                {finalArray.reduce((arg1: any, arg2: any) => arg1 + arg2.price * arg2.qty, 0)}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button className="primary block" onClick={this.checkUser}>Proceed to Pay</button>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                {/* {JSON.stringify(finalArray)} */}
                {/* {JSON.stringify(this.props.user_details)} */}
            </React.Fragment>
        )
    }
}

const receive = (state: any) => {
    return {
        res: state.cart,
        user_details: state.signIn.user_details
    }
}

const send = (dispatch: any) => {
    return {
        getAddItemResult: (id: string, qty: number) => {
            dispatch(addCartItem(id, qty))
        },
        deleteItemResult: (id: string) => {
            dispatch(deleteCartItem(id))
        }
    }
}
export default connect(receive, send)(CartScreen);