import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Rating from "./Rating";

interface IProps {
    arr: any[]
}
interface IState { }

class Products extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <div className="row center">
                    {this.props.arr.map((prod, index) => (
                        <div className="card" key={index}>
                            <NavLink to={`/product/${prod._id}`} exact={true} >
                                <img src={prod.image} alt={prod.name} />
                            </NavLink>
                            <div className="card-body">
                                <h2>{prod.name}</h2>
                                <Rating rating={prod.rating} numReviews={prod.numReviews}></Rating>
                                <div className="price">Price: $ {prod.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default Products;