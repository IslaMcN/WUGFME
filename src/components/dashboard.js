import React, {Component} from 'react';
import history from '../history.js';

class Dashboard extends Component {
    constructor(props){
        super();
        this.state = {
            Name: this.props.Name
        }
    }
    createNewOrder = e => {
        history.push('/Breakfast');
        window.location.reload(true)
    }
    render(){
    return(
        <div>
            <h2>Welcome {this.state.Name}</h2>
            <section>
                <h3>Status of Current Order</h3>
                {/* <p>${message}</p> */}
                <button>Cancel Order</button>
                <button>Edit Order</button>
            </section>
            <section>
                <button onClick={this.createNewOrder}>Create New Order</button>
            </section>

        </div>
    )}
}

export default Dashboard;