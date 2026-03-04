"use client";
import { useEffect, useState } from "react";
import styles from "./gridSkills.module.css";

export default function Loading({ progress, completed }) {
  const [loadAnimation, setLoadAnimation] = useState(1);
  const [selectedSkill, setSelectedSkill] = useState("");

  const Frontend = [
    "React",
    "Next.js",
    "Angular",
    "Vue.js",
    "TypeScript",
    "JavaScript",
    "Redux",
    "Three.js",
    "Tailwind CSS",
    "Material-UI",
  ];

  const Backend = [
    "Node.js",
    "Express",
    "Next.js",
    "GraphQL",
    "NestJS",
    "Serverless Framework",
    "REST APIs",
  ];
  
  const MobileDevelopment = [
    "Flutter",
    "Dart",
    "Kotlin",
    "Swift",
    "iOS Development",
    "Android Development",
    "Cross-platform Apps",
  ];

  const Databases = [
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "Neon Serverless Postgres",
    "SQL",
  ];

  const DevOpsCloud = [
    "Docker",
    "GitHub Actions",
    "Vercel",
    "AWS",
    "CI/CD",
  ];

  const SpecializedSkills = [
    "Geospatial Data Processing",
    "Trip Clustering",
    "Route Similarity Analysis",
    "Parallel Processing",
    "Binary File Parsing",
    "Interpreter Design",
    "Research Software Development",
    "Scientific Data Visualization",
  ];
  
  const Java = ["Java", "Research Software", "PTIDEJ Platform", "Legacy Modernization"];
  const Research = ["Academic Software", "Data Pipelines", "Conference Presentations", "Open Source"];


  const threshold = 100 / Math.max(
    Frontend.length,
    Backend.length,
    MobileDevelopment.length,
    Databases.length,
    DevOpsCloud.length,
    SpecializedSkills.length
  );

  const shownFrontend = Frontend.slice(0, Math.floor(progress / threshold));
  const shownBackend = Backend.slice(0, Math.floor(progress / threshold));
  const shownMobile = MobileDevelopment.slice(0, Math.floor(progress / threshold));
  const shownDatabases = Databases.slice(0, Math.floor(progress / threshold));
  const shownDevOps = DevOpsCloud.slice(0, Math.floor(progress / threshold));
  const shownSpecialized = SpecializedSkills.slice(0, Math.floor(progress / threshold));

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadAnimation((prev) => (prev + 1) % 4); 
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderSkills = () => {
    if (selectedSkill === "fullstack") {
      return (
        <>
          <h2>Frontend</h2>
          <ul>
            {shownFrontend.map((skill, index) => (
              <li key={`frontend-${index}`}>{skill}</li>
            ))}
          </ul>
          <h2>Backend</h2>
          <ul>
            {shownBackend.map((skill, index) => (
              <li key={`backend-${index}`}>{skill}</li>
            ))}
          </ul>
          <h2>Databases</h2>
          <ul>
            {shownDatabases.map((skill, index) => (
              <li key={`database-${index}`}>{skill}</li>
            ))}
          </ul>
        </>
      );
    } else if (selectedSkill === "mobile") {
      return (
        <>
          <h2>Mobile Development</h2>
          <ul>
            {shownMobile.map((skill, index) => (
              <li key={`mobile-${index}`}>{skill}</li>
            ))}
          </ul>
        </>
      );
    } else if (selectedSkill === "devops") {
      return (
        <>
          <h2>DevOps & Cloud</h2>
          <ul>
            {shownDevOps.map((skill, index) => (
              <li key={`devops-${index}`}>{skill}</li>
            ))}
          </ul>
        </>
      );
    } else if (selectedSkill === "specialized") {
      return (
        <>
          <h2>Specialized Engineering</h2>
          <ul>
            {shownSpecialized.map((skill, index) => (
              <li key={`specialized-${index}`}>{skill}</li>
            ))}
          </ul>
        </>
      );
    } else if (selectedSkill === "java") {
      return (
        <>
          <h2>Java & Research</h2>
          <ul>
            {Java.map((skill, index) => (
              <li key={`java-${index}`}>{skill}</li>
            ))}
          </ul>
        </>
      );
    } else if (selectedSkill === "research") {
      return (
        <>
          <h2>Research Contributions</h2>
          <ul>
            {Research.map((skill, index) => (
              <li key={`research-${index}`}>{skill}</li>
            ))}
          </ul>
        </>
      );
    } else {
      return null;
    }
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
          border: "1px solid white",
          borderRadius: "5px",
          width: "50vw",
          height: "5vh",
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          display: completed ? "none" : "flex",
          position: "relative",
          overflow: "hidden",
          flexDirection: "column",
          padding: "10px",
          color: "white",
          marginBlock: "5vh",
        }}
      >
        <h1
          style={{
            letterSpacing: "0.1em",
          }}
        >
          Loading{".".repeat(loadAnimation)}
        </h1>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            zIndex: "-1",
            boxShadow:
              "rgba(27, 69, 66, 0.3) 0px 30px 60px -12px inset, rgba(102, 252, 241, 0.7) 0px 33px 36px -18px inset",
            borderRadius: "5px",
            position: "absolute",
            top: "0",
            left: "0",
            transition: "width 0.5s",
          }}
        ></div>
      </div>
      <div className={styles.gridSkills}>
        <div
          onClick={() => {
            if (selectedSkill === "fullstack") {
              setSelectedSkill("");
            } else {
              setSelectedSkill("fullstack");
            }
          }}
          className={styles.skillButton}
        >
          <h1>Full-Stack</h1>
        </div>
        <div
          onClick={() => {
            if (selectedSkill === "mobile") {
              setSelectedSkill("");
            } else {
              setSelectedSkill("mobile");
            }
          }}
          className={styles.skillButton}
        >
          <h1>Mobile</h1>
        </div>
        <div
          onClick={() => {
            if (selectedSkill === "devops") {
              setSelectedSkill("");
            } else {
              setSelectedSkill("devops");
            }
          }}
          className={styles.skillButton}
        >
          <h1>DevOps</h1>
        </div>
        <div
          onClick={() => {
            if (selectedSkill === "specialized") {
              setSelectedSkill("");
            } else {
              setSelectedSkill("specialized");
            }
          }}
          className={styles.skillButton}
        >
          <h1>Specialized</h1>
        </div>
        <div
          onClick={() => {
            if (selectedSkill === "java") {
              setSelectedSkill("");
            } else {
              setSelectedSkill("java");
            }
          }}
          className={styles.skillButton}
        >
          <h1>Java</h1>
        </div>
        <div
          onClick={() => {
            if (selectedSkill === "research") {
              setSelectedSkill("");
            } else {
              setSelectedSkill("research");
            }
          }}
          className={styles.skillButton}
        >
          <h1>Research</h1>
        </div>
      </div>
      <div
        className={styles.skillDetails}
        style={{
          height: "100%",
          maxHeight: selectedSkill ? "fit-content" : "0vh",
          overflow: "hidden",
          padding: selectedSkill ? "20px" : "0 20px",
        }}
      >
        {renderSkills()}
      </div>
    </div>
  );
}
