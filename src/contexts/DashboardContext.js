import React, {createContext} from 'react';
import{ Data }from '../data';


const DashboardContext = createContext(Data(1));
console.log('Dashboard Context:', DashboardContext)

export default DashboardContext;