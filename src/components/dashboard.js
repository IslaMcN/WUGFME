import React from 'react';

class Dashboard extends React.Component() {
    constructor(){
        super();
        this.state = {
            Name: ""
        }
    }
    render(){
    return(
        <div>
            {/* <h2>Welcome ${name}</h2> */}
            <section>
                <h3>Status of Current Order</h3>
                {/* <p>${message}</p> */}
                <button>Cancel Order</button>
                <button>Edit Order</button>
            </section>
            <section>
                <button>Create New Order</button>
            </section>

        </div>
    )}
}

export default Dashboard;