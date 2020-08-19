import axios from 'axios';

export const Data = (id) =>{
    return(
        axios.get(`http://localhost:5000/router/${id}`)
            .then(res => {
                console.log('res:', res.data[0])
                return res.data[0]
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