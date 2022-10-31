import React from "react";
import DiscoverAccounts from "./DiscoverAccounts.js";
import Header from "./Header.js";
import "../../CSS/Lists.css";
import DefaultPFP from "../../Images/DefaultTwitterpfp.png";
import Heart from "../../Images/heart.png";
import LikedAccounts from "./LikedAccounts.js";

function MainLists() {
    return (
        <div className="mainLayout">
            <div className="header"> <Header /></div>
            <div className="pinnedLists">
                <h3>Pinned Lists</h3>
            
            </div>
            <div className="discoverNewLists"> 
                <h3>Discover New Lists</h3>
                <DiscoverAccounts 
                    accountIconLink = {DefaultPFP}
                    title="Happy Life"
                    name = "Winter Kim"
                    username = "@winterkim"
                    followIconLink= <button>Follow</button>
                />
                <DiscoverAccounts 
                    accountIconLink = {DefaultPFP}
                    title="Sad Life"
                    name = "Smit Ghal"
                    username = "@Smitghal"
                    followIconLink= <button>Follow</button>
                />
                <DiscoverAccounts 
                    accountIconLink = {DefaultPFP}
                    title="Wierd Life"
                    name = "bunnyBro"
                    username = "@bunnyBro"
                    followIconLink= <button>Follow</button>
                />
                <DiscoverAccounts 
                    accountIconLink = {DefaultPFP}
                    title="HAha Life"
                    name = "Towel Lee"
                    username = "@towelLee"
                    followIconLink= <button>Follow</button>
                />
                <DiscoverAccounts 
                    accountIconLink = {DefaultPFP}
                    title="Cool Life"
                    name = "Mouse Lu"
                    username = "@mouselu"
                    followIconLink= <button>Follow</button>
                />
            </div>
            <div className="yourLists"> 
                <h3>Your Liked Lists</h3>
                <LikedAccounts 
                    accountIconLink = {DefaultPFP}
                    title="I like Life"
                    name = "Charger Hee"
                    username = "@chargerhee"
                    likeIcon= {Heart}
                />
                <LikedAccounts 
                    accountIconLink = {DefaultPFP}
                    title="I'm sad Life"
                    name = "Computer Life"
                    username = "@computerlife"
                    likeIcon= {Heart}
                />
            </div>

    
    
        </div>
    );
  }
  
export default MainLists;



// //             <Accounts 
// pfp={"https://i.imgur.com/a5nXjAH.jpeg"}
// username={"Claire Lee"}
// text="Hello World!"
// />
