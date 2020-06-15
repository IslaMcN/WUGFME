import React, {useState} from 'react';
import { SectionTop, Body, Header, Navigation, Tag, Main, SectionBottom, SecondHeader, Paragraph, GIF, Bold, CTA, DIV, Link, Line } from './Style/styled-components';
import axios from 'axios';


export const BreakfastForm = () => {
    const [data, setData] = useState(
        {
            Likes:'',
            Dislikes:''
        }
    )
    const handlechange = e => {
        setData(
            {
                ...data,
                [e.target.name]: e.target.value
            }
        )
        console.log(data)
    };
    const submitHandle = e =>{
        e.preventDefault();
        axios()
            .post('/Breakfast', data)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/Lunch');
            })
            .catch( err => {
                alert("Error! Check form for fields missed.")
                console.log("Hey Isla, Look here:", err)
            })

        
    }
    return(
        <Body>
            <form onSubmit={submitHandle}>
                <SecondHeader>Breakfast</SecondHeader>
                <label>Likes</label><br></br>
                <textarea name="Likes"value={data.Likes}onChange={handlechange}></textarea><br></br>
                <label>Dislikes</label><br></br>
                <textarea name="Dislikes" value={data.Dislikes}onChange={handlechange}></textarea>
                <CTA>Submit</CTA>
            </form>
        </Body>
    )
}

export const LunchForm = () => {
    return(
        <div>
            <form>
                <h2>Lunch</h2>
                <label>Likes</label><br></br>
                <textarea type="text"></textarea><br></br>
                <label>Dislikes</label><br></br>
                <textarea ></textarea>
            </form>
        </div>
    )
}

export const DinnerForm = () => {
    return(
        <div>
            <form>
                <h2>Dinner</h2>
                <label>Likes</label><br></br>
                <textarea type="text"></textarea><br></br>
                <label>Dislikes</label><br></br>
                <textarea ></textarea>
            </form>
        </div>
    )
}

export const NoGos = () => {
    return(
        <div>
            <form>
                <h2>Last Form!</h2>
                <label>Allergies</label><br></br>
                <textarea type="text"></textarea><br></br>
                <label>Food Restrictions</label><br></br>
                <textarea placeholder="Vegan, vegetarian, gluten free, etc."></textarea>
            </form>
        </div>
    )
}