import axios from 'axios';

export function Data(id) {
    return(
        axios.get(`http://localhost:5000/router/${id}`)
            .then(res => {
                console.log('res:', res.data[0].Name)
                return res.data[0].Name
            })
            .catch(err => {
                console.log(err)
            })
    )
}

// export const UserTest = [{
//     'id': 1,
//     'Name': 'Arya',
//     'Email': 'stinky@baby.com'
// }]