import React, {useContext} from 'react';
import history from '../history.js';
import DashboardContext from '../contexts/DashboardContext.js'




const  Dashboard =  () => {
    //const {dash} = useContext(DashboardContext)
    //console.log('dash:',dash)
    console.log('here')
    const createNewOrder = e => {
        //history.push('/Breakfast');
        window.location.reload(true)
    }
    return(
      
        <DashboardContext.Consumer>
            {value =>{
                 console.log("value",value.dashboard)
                return(
                <>
            <h2>Welcome {value.dashboard}
            </h2>
            <section>
                <h3>Status of Current Order</h3>
               
                <button>Cancel Order</button>
                <button>Edit Order</button>
            </section>
            <section>
                <button onClick={createNewOrder}>Create New Order</button>
            </section>
            </>)
}}
        </DashboardContext.Consumer>
    )
}


 
export default(Dashboard);