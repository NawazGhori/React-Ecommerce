import React, { Component } from "react";
import { match } from "react-router";
import { Location } from "history";
import { connect } from "react-redux";
import addCartItem from "../actions/CartActions";

interface IProps {
    match: match<routeParams>;
    location: Location;
    res: any;
    getAddItemResult: any;
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

    render() {
        const {finalArray} = this.props.res
        console.log(finalArray)
        return (
            <React.Fragment>

                cart screens
                {/* {this.props.match.params.id}<br />
                {this.props.location.search ? (Number(this.props.location.search.split("=")[1])) : 1} */}

                {/* {JSON.stringify(finalArray)} */}

                <table className="cart-table">
                    <thead>
                        <tr>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Brand</td>
                            <td>Description</td>
                            <td>Price</td>
                            <td>Qty</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {finalArray.map((obj:any) =>(
                            <tr>
                                <td><img src={obj.image} alt={obj.name}/></td>
                                <td>{obj.name}</td>
                                <td>{obj.brand}</td>
                                <td>{obj.description}</td>
                                <td>{obj.price}</td>
                                <td>{obj.qty}</td>
                                <td>{obj.price * obj.qty }</td>
                            </tr>
                        ))}
                            
                        
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

const receive = (state: any) => {
    return{
        res: state.cart
    }
}

const send = (dispatch: any) => {
    return {
        getAddItemResult: (id: string, qty: number) => {
            dispatch(addCartItem(id, qty))
        }
    }
}
export default connect(receive,send)(CartScreen);