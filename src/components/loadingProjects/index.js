import { useEffect, useState } from "react";
import styles from "./gridSkills.module.css";

export default function LoadingProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [hp, setHp] = useState(100); // Initial HP at 100%

  const Projects = [
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
      description: "Description 3",
      linkUrl: "No link available",
    },
    {
      name: "Project 4",
      description: "Description 4",
      linkUrl: "No link available",
    },
    {
      name: "Project 5",
      description: "Description 5",
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
        }}
      >
        {Projects.map((project, index) => {
          return (
            <div
              className={styles.projectButton}
              onClick={() => handleClick(project)}
              key={index}
            >
              <h1>{project.name}</h1>
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
          <h1>First spawn takes 2 seconds!</h1>
        </div>
      )}
      {selectedProject && hp === 0 && (
        <div style={{ color: "white", alignSelf: "center" }}>
          <h1>Respawning...</h1>
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
