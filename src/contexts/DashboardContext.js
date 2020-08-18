import React, {createContext} from 'react';
import{ UserTest }from '../data';

function GetUser(){

}

const DashboardContext = createContext({
    Name: UserTest.Name
});
console.log('Dashboard Context:', DashboardContext._currentValue)

export default DashboardContext;