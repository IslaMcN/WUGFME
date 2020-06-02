import React from 'react';
import styled from "styled-components";

const Header = styled.h1`
color: red;
`

const LandingPage = () => {
    return(
        <div>
            <Header>What U Got For Me Eatz</Header>
            <nav>
                <a href="/">Logo</a>
                <a href="">Sign In</a>
                <a href="">Register</a>
            </nav>
            <body>
                <section>
                    <h2>About Us</h2>
                    <p>Here at What U Got For Me Eatz we understand busy schedules, limited time frames and necessity of ease-of-access. Whether you're a streamer or a doctor, teacher or an emergency care professional, we know that, in the words of April Ludgate, "time is money, money is power, power is pizza and pizza is knowledge."</p>
                    <iframe src="https://giphy.com/embed/p6iPHyrGYLiRq" width="480" height="192" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/time-money-power-p6iPHyrGYLiRq">via GIPHY</a></p>
                </section>
                <section>
                    <h2>What We Do</h2>
                    <p>When you send us your personalized form, we will review and create: breakfasts, lunches, dinners and snack & late night cravings ideas based on the Tier and Energy Level you choose.</p>
                    <p>Based on the level of energy you have or want to put into making your meals, we will include shopping lists of the items you'll want from your local grocery store or grocery delivery service. Or, if you choose, we'll send you step-by-step instructions on how how to make your dish from scratch.</p>
                    <h3>Be sure to fill out the allergies and likes/dislikes sections as best you can for a more personalized meal making experience.</h3>
                </section>
                <button onClick={"/Packages"}>Learn More</button>
            </body>
        </div>
    )
}

export default LandingPage;