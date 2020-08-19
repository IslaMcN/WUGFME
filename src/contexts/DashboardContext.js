import React, {createContext} from 'react';
import{ Data }from '../data';

function GetUser(){

}

const DashboardContext = createContext(Data);
console.log('Dashboard Context:', DashboardContext)

export default DashboardContext;