import React, {useContext} from 'react';
import history from '../history.js';
import DashboardContext from '../contexts/DashboardContext.js'




const Dashboard = () => {
    const {dash} = useContext(DashboardContext);
    console.log('dash:',dash)
    const createNewOrder = e => {
        history.push('/Breakfast');
        window.location.reload(true)
    }
    
    return(
        <DashboardContext.Consumer>
            <h2>Welcome {dash.map(item =>{
                console.log(item)
            })}</h2>
            <section>
                <h3>Status of Current Order</h3>
                {/* <p>${message}</p> */}
                <button>Cancel Order</button>
                <button>Edit Order</button>
            </section>
            <section>
                <button onClick={createNewOrder}>Create New Order</button>
            </section>

        </DashboardContext.Consumer>
    )
}

const mapStateToProps = state => {
    return{
        value: state.value,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default(Dashboard);