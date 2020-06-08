import React from 'react';

import { SectionTop, Body, Header, Navigation, Tag, Main, SectionBottom, SecondHeader, Paragraph, GIF, Bold, CTA, DIV } from './Style/styled-components';



const LandingPage = () => {
    return(
        <Body>
            <Header>What U Got For Me Eatz</Header>
            <Navigation>
                <Tag href="/">Logo</Tag>
                <Tag href="">Sign In</Tag>
                <Tag href="">Register</Tag>
            </Navigation>
            <Main>
                <SectionTop>
                    <SecondHeader>About Us</SecondHeader>
                    <Paragraph>Here at What U Got For Me Eatz we understand busy schedules, limited time frames and necessity of ease-of-access. Whether you're a streamer or a doctor, teacher or an emergency care professional, we know that, in the words of April Ludgate, "time is money, money is power, power is pizza and pizza is knowledge."</Paragraph>
                    <GIF src="https://giphy.com/embed/p6iPHyrGYLiRq" width="480" height="192" frameBorder="0" class="giphy-embed" allowFullScreen></GIF>
                </SectionTop>
                <SectionBottom>
                    <SecondHeader>What We Do</SecondHeader>
                    <Paragraph>When you send us your personalized form, we will review and create: breakfasts, lunches, dinners and snack & late night cravings ideas based on the Tier and Energy Level you choose.</Paragraph>
                    <Paragraph>Based on the level of energy you have or want to put into making your meals, we will include shopping lists of the items you'll want from your local grocery store or grocery delivery service. Or, if you choose, we'll send you step-by-step instructions on how how to make your dish from scratch. 
                    <Bold> Be sure to fill out the allergies and likes/dislikes sections as best you can for a more personalized meal making experience.</Bold></Paragraph>
                </SectionBottom>
                <DIV>
                    <CTA onClick={"/Packages"}>Learn More</CTA>
                </DIV>
            </Main>
        </Body>
    )
}

export default LandingPage;