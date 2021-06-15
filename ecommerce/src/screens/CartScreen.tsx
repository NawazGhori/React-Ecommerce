import React, { Component } from "react";
import { match } from "react-router";
import { Location } from "history";
import { connect } from "react-redux";
import addCartItem,{deleteCartItem} from "../actions/CartActions";

interface IProps {
    match: match<routeParams>;
    location: Location;
    res: any;
    getAddItemResult: any;
    deleteItemResult:any;
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
    deleteItem = (id:any)=>{
        this.props.deleteItemResult(id)
    }
    render() {
        const {finalArray} = this.props.res
        console.log(finalArray)
        return (
            <React.Fragment>
                cart screens
                {JSON.stringify(finalArray)}
                <div className="row top">
                   {finalArray.map((element:any,index:number)=>(
                       <div key={index}>
                           <img src={element.image} className="small_img"></img> 
                           <button onClick={()=>this.deleteItem(element._id)}>Delete</button>
                       </div>
                   ))} 
                </div>
                {/* {JSON.stringify(finalArray)} */}
                
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
        },
        deleteItemResult: (id:string)=>{
            dispatch(deleteCartItem(id))
        }
    }
}
export default connect(receive,send)(CartScreen);