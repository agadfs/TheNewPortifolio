import { useEffect, useState } from "react";
import styles from "./gridSkills.module.css";

export default function LoadingProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [hp, setHp] = useState(100); // Initial HP at 100%

  const Projects = [
    {
      name: "Concordia University Intership",
      description: `Dr. Professor Yann-Gael from Concordia University, is responsible for the PTIDEJ software, and many others.
The PTIDEJ software is the project that I will be working with him, and it’s a tool for many programming
languages that can read the full code of a file, analyze each class, component and model of the its code.
It contains many parsers and compilers that can read, optimize and show every object, class, model of any
function written in JAVA, C++, C#, Python and one of my current projects are to enable for JavaScript.
Professor Yann-Gael and this project is introducing me so many new programming languages, and many
new people and cultures that I’m very excited to be part of this team.`,
      linkUrl: "No link available",
    },
    {
      name: "Pro+ Club Mobile App",
      description: `This was request for me to take care of, a remake of the mobile app Clube Pro+ by
Total Energies, a global integrated energy company. The app is a full stack cashback app for products of Total
Energies.


Using Expo and React Native as frameworks for frontend and axios for integrations.
MySql, Express and Next.js for backend.
Most of the time is a full stack job, requiring strong analytical, organizing and creative skills to
understand, replicate and improve the old app`,
      linkUrl: "No link available",
    },
    {
      name: "Le Garden",
      description: `
      Official website of a famous inn in the southeast region of Brazil. A platform was created to be able to change
anything on the website with just one click without the help of the developer with reservation feedback for the
inn via email.
 Using React, Next JS and Dato CMS for friendly no-code changes on the app
 Express and Next.js for backend, with full customized integration of calendar, stock, inventory and
booking of the inn.
 Needs to fully understand the documentation of Next.js to fully integrate with DatoCMS, and the
custom made booking api so it allows the costumer to make changes without coding or invervention
of the developer

      `,
      linkUrl: "No link available",
    },
    {
      name: "Digicoins",
      description: `A website that is fully integrated with crypto currencies API’s, Metamask for creation, management and purchase
of crypto coins such as Etherium, BitCoin and so on. And to show up to date and real time information of each of
these coins, is used CoinGecko.
Using NextJS as the primary framework to integrate with the rest of the app.
Full integration with the browser extension and mobile app of Metamask.
 Real time information, containing graphs, charts and market variations.`,
      linkUrl: "No link available",
    },
    {
      name: "Project RP",
      description: `
      A complete platform and social network for playing tabletop RPGs and MMORPGs, featuring a full inventory system, attributes, and map creation. 
      There's also a second version of the site that logs data in real-time to simulate an MMORPG.
      In addition to everything from the other version, it includes an algorithm that manages everything in the game, 
      such as NPC movements, items on the ground, map design changes, and a "pathfinding" system (which determines if the path has obstacles), 
      along with much more that cannot be briefly mentioned here.

      `,
      linkUrl: "No link available",
    },
  ];

  const handleClick = (project) => {
    // Start with reducing HP to 0
    setHp(0);

    // Wait for 2 seconds after HP bar reaches 0
    setTimeout(() => {
      // Start blinking effect
      setIsBlinking(true);

      // Wait 1 second for blinking effect before changing content
      setTimeout(() => {
        setIsBlinking(false);
        setIsTransitioning(true);
        setTimeout(() => {
          setSelectedProject(project);
          setIsTransitioning(false);
          setHp(100); // Reset HP back to 100% for next transition
        }, 500); // Duration of fade out animation
      }, 1000); // Duration of blinking before changing content
    }, 1000); // Wait time after HP reaches 0
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1%",
          width: "100vw",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          alignContent: "center",
          justifyItems: "center",
          alignSelf: "center",
        }}
      >
        {Projects.map((project, index) => {
          return (
            <div
              className={styles.projectButton}
              onClick={() => handleClick(project)}
              key={index}
            >
              <p style={{fontSize:"4vh", textAlign:"center"}} >{project.name}</p>
            </div>
          );
        })}
      </div>
      <div
        style={{
          alignSelf: "center",
          display: selectedProject ? "flex" : "none",
          color: "white",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginTop: "-2vh",
        }}
      >
        <p style={{ fontSize: "4vh", marginBottom: "-0.1vh" }}>HP Bar</p>
        <div
          style={{ border: "2px solid white", height: "5vh", width: "50vw" }}
        >
          <div
            style={{
              backgroundColor: "red",
              width: `${hp}%`,
              height: "100%",
              transition: "width 0.5s",
            }}
          ></div>
        </div>
      </div>
      {!selectedProject && (
        <div
          style={{
            color: "white",
            alignSelf: "center",
            width: "100%",
            placeSelf: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Click to spawn a project</h1>
        </div>
      )}
      {selectedProject && hp === 0 && (
        <div style={{ color: "white", alignSelf: "center" }}>
          <h1>Respawning...</h1>
        </div>
      )}
      {selectedProject === null && hp === 0 && (
        <div style={{ color: "white", alignSelf: "center" }}>
          <h1>Spawning...</h1>
        </div>
      )}
      <div
        style={{
          display: selectedProject ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          width: "auto",
          height: "auto",
          paddingInline: "5vw",
          fontSize: "3vh",
          border: "2px solid white",
          marginTop: "2vh",
        }}
      >
        <h1
          className={`${isBlinking ? styles["blink-multiple"] : ""} ${
            isTransitioning ? styles["fade-out"] : ""
          }`}
          style={{ fontSize: "4vh" }}
        >
          {selectedProject?.name}
        </h1>
        <p
          className={`${isBlinking ? styles["blink-multiple"] : ""} ${
            isTransitioning ? styles["fade-out"] : ""
          }`}
          style={{ fontSize: "2vh" }}
        >
          {selectedProject?.description}
        </p>
        <p
          className={`${isBlinking ? styles["blink-multiple"] : ""} ${
            isTransitioning ? styles["fade-out"] : ""
          }`}
          style={{ fontSize: "2vh" }}
        >
          {selectedProject?.linkUrl}
        </p>
      </div>
    </div>
  );
}
