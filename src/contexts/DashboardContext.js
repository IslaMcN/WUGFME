import React, {createContext} from 'react';
import{ Data }from '../data';



function DashboardContext() {Data(1).then(res => {
    console.log('res', res)
    return createContext(res)
})}
console.log('Dashboard Context:', DashboardContext)

export default DashboardContext;