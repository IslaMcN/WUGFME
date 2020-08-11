import React, {Component, useEffect} from 'react';
import history from '../history.js';
import {connect} from 'react-redux';
import {getUser} from '../actions';

const Dashboard = ({getUser, value, isFetching, error}) => {
    useEffect(() => {
        getUser();
    },[]);
    if(isFetching){
        return(<div>Loading. . .</div>)
    }
    
    const createNewOrder = e => {
        history.push('/Breakfast');
        window.location.reload(true)
    }
    
    return(
        <div>
            <h2>Welcome {value}</h2>
            <section>
                <h3>Status of Current Order</h3>
                {/* <p>${message}</p> */}
                <button>Cancel Order</button>
                <button>Edit Order</button>
            </section>
            <section>
                <button onClick={createNewOrder}>Create New Order</button>
            </section>

        </div>
    )
}

const mapStateToProps = state => {
    return{
        value: state.value,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getUser})(Dashboard);