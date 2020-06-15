import React, {useState} from 'react';

export const BreakfastForm = () => {
    return(
        <div>
            <form>
                <h2>Breakfast</h2>
                <label>Likes</label><br></br>
                <textarea type="text"></textarea><br></br>
                <label>Dislikes</label><br></br>
                <textarea ></textarea>
            </form>
        </div>
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