import React, {Component} from "react";
import { connect } from "react-redux";
import { match, NavLink } from 'react-router-dom';
import getDetails from "../actions/DetailActions";

interface IState{}
interface IProps{
    match: match<paramRoutes>;
    getDetailsById:any;
    res:any;
}

interface paramRoutes{
    id:any;
}

class ProductScreen extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    componentDidMount(){
        this.props.getDetailsById(this.props.match.params.id);
    }
    render(){
        const {loading,product,error} = this.props.res
        return(
            <React.Fragment>
                <NavLink to="/" className="back_screen"><i className="fa fa-home"></i></NavLink>
                <p>{this.props.match.params.id}</p>
                <p>{JSON.stringify(loading)}...{JSON.stringify(product)}.... {JSON.stringify(error)}</p>
            </React.Fragment>
        )
    }
}

const receive = (state:any)=>{
    return{
        res: state.details
    }
}

const send = (dispatch:any)=>{
    return {
        getDetailsById:(id:any)=>{
            dispatch(getDetails(id))
        }
    }
}

export default connect(receive,send)(ProductScreen);