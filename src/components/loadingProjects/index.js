import { useEffect, useState } from "react";
import styles from "./gridSkills.module.css";

export default function LoadingProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [hp, setHp] = useState(100); // Initial HP at 100%

  const Projects = [
    {
      name: "BDMobility – Mobility Analysis Platform",
      description: `Lead developer of BDMobility, a comprehensive research platform designed to analyze transportation behavior and urban mobility patterns.
      
Technologies: Flutter, Next.js, TypeScript, PostgreSQL, Docker

Key features:
• Mobile application collecting GPS mobility data
• Backend pipeline processing 20M+ coordinates and 200,000+ recorded trips
• Route similarity detection and trip clustering algorithms
• Traffic delay analysis and route deviation detection
• Interactive research dashboards for data exploration
• Geospatial data processing with Fréchet distance path comparison

The platform is distributed through a public Flutter mobile application available on app stores and serves interdisciplinary research teams studying urban mobility and migration patterns.`,
      linkUrl: "github.com/agadfs",
    },
    {
      name: "University Conference Management Platform",
      description: `Complete conference management infrastructure for Concordia University, designed for student organizers and academic committees.

Key capabilities:
• Full database, backend, and frontend architecture
• Multi-role dashboards for organizers, presenters, judges, and sponsors
• Conference schedule management with automated suggestions and autofill
• Payment systems and registration management
• Submission and publication systems for presentations and posters
• Judge assignment and automated scheduling tools
• Sponsor dashboards for managing partnerships

The system provides a centralized platform for organizing large academic conferences, replacing manual workflows with integrated digital tools.`,
      linkUrl: "In development",
    },
    {
      name: "CRVJA – AMOS BASIC Interpreter",
      description: `A browser-based interpreter for the AMOS BASIC programming language originally used on the Commodore Amiga.

Technologies: JavaScript, React, Next.js

Key features:
• Reverse-engineered AMOS tokenized binary format
• Built tokenizer and interpreter capable of executing legacy programs
• Browser-based rendering of graphics and animations
• Support for sprite banks and Amiga assets
• Used in Concordia programming camps to teach programming fundamentals

This project demonstrates expertise in interpreter design, binary file parsing, and reverse engineering of legacy systems.`,
      linkUrl: "github.com/agadfs",
    },
    {
      name: "PTIDEJ Research Software",
      description: `Research Software Developer at PTIDEJ Research Group – Concordia University. Contributor to PTIDEJ, a major academic software engineering research platform used to analyze object-oriented software architecture.

Key contributions:
• Modernized core parsing infrastructure including CFParse for constant pool parsing
• Updated legacy components to ensure compatibility with modern Java versions
• Fixed architectural and stability issues across the platform
• Contributed improvements to research tools for analyzing software design patterns

The PTIDEJ platform can read, analyze, and model code from multiple programming languages including Java, C++, C#, and Python.`,
      linkUrl: "Concordia University",
    },
    {
      name: "AMOS Binary Decoder",
      description: `Advanced tools for decoding tokenized AMOS BASIC files and reconstructing readable source code from binary formats.

Key features:
• Reverse engineering of binary token structures
• Parsing commands, variables, strings, and floating-point values
• Reconstruction of original program structure and logic
• Documentation of the AMOS BASIC binary format

This project required deep understanding of binary file formats, tokenization systems, and programming language internals.`,
      linkUrl: "github.com/agadfs",
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
