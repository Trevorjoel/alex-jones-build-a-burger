import React, {Component} from "react";
import Order from '../Order/Order';
import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from '../UI/Spinner/Spinner';
class Orders extends Component {

        componentDidMount() {
            this.props.onFetchOrder()
        }

    render(){
            let orders = <Spinner />
            if(!this.props.loading){
              orders = this.props.orders.map(order =>(
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}
                    />
                ))
            }
        return(
            <div>
                {orders}
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrder: () => dispatch(actions.fetchOrders())
    }
}

const mapStateToProps = state =>{
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(Orders, axios));