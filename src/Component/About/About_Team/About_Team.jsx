import React from "react";
import "./About_Team.css";
import teamInfo from "./TeamCard/TeamData";
import TeamCard from "./TeamCard/TeamCard";

function About_Team() {
  return (
    <>
      <div className="About_Team">
        <div className="About_our_team">
          <div className="">
            <div className="line"></div>
          </div>
          <div className="about_team">
            <p>A Few Words About</p>
          </div>
          <div className="our_team">
            <p>Our Team</p>
          </div>
          <div className="our_team_dec">
            <p>
              Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
              mauris vitae erat consequat auctor eu in elit.
            </p>
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra.
            </p>
          </div>
          <div className="TeamCard_section">
          {teamInfo.map((el) => {
            return (
              <TeamCard
                imageUrl={el.imageUrl}
                name={el.name}
                position={el.position}
              />
            );
          })}
        </div>
        </div>
        
      </div>
    </>
  );
}

export default About_Team;
