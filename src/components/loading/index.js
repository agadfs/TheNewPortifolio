"use client";
import { useEffect, useState } from "react";
import styles from "./gridSkills.module.css";

export default function Loading({ progress, completed }) {
  const [loadAnimation, setLoadAnimation] = useState(1);
  const [selectedSkill, setSelectedSkill] = useState("");

  const JavaScript_Node_FrontEnd = [
    "React",
    "Angular",
    "Vue.js",
    "jQuery",
    "Next.js",
    "Redux",
    "Three.js",
    "Tailwind CSS",
    "Material-UI",
    "Ant Design",
  ];

  const JavaScript_Node_BackEnd = [
    "Express",
    "MongoDB",
    "Mongoose",
    "Socket.io",
    "GraphQL",
    "Prisma",
    "NestJS",
    "Next.js",
    "Gatsby",
    "LoopBack",
    "SocketCluster",
    "Serverless Framework",
    "Firebase Functions",
  ];
  
  const Java = ["Spring", "Hibernate", "Maven"];
  const CSharp = [".NET Core", "Entity Framework", "Unity Engine"];


  const frontEndThreshold = 100 / JavaScript_Node_FrontEnd.length;
  const backEndThreshold = 100 / JavaScript_Node_BackEnd.length;

 
  const shownFrontEndSkills = JavaScript_Node_FrontEnd.slice(
    0,
    Math.floor(progress / frontEndThreshold)
  );

  const shownBackEndSkills = JavaScript_Node_BackEnd.slice(
    0,
    Math.floor(progress / backEndThreshold)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadAnimation((prev) => (prev + 1) % 4); 
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderSkills = () => {
    if (selectedSkill === "javascript") {
      return (
        <>
          <h2>Front-End Skills</h2>
          <ul>
            {shownFrontEndSkills.map((skill, index) => (
              <li key={`frontend-${index}`}>{skill}</li>
            ))}
          </ul>
          <h2>Back-End Skills</h2>
          <ul>
            {shownBackEndSkills.map((skill, index) => (
              <li key={`backend-${index}`}>{skill}</li>
            ))}
          </ul>
        </>
      );
    } else if (selectedSkill === "java") {
      return (
        <>
          <h2>Java Skills</h2>
            <ul>
                {Java.map((skill, index) => (
                <li key={`java-${index}`}>{skill}</li>
                ))}
            </ul>
        </>
      );
    } else if (selectedSkill === "c#") {
      return (
        <>
          <h2>C# Skills</h2>
            <ul>
                {CSharp.map((skill, index) => (
                <li key={`csharp-${index}`}>{skill}</li>
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
            if (selectedSkill === "javascript") {
              setSelectedSkill("");
            } else {
              setSelectedSkill("javascript");
            }
          }}
          className={styles.skillButton}
        >
          <h1>JavaScript</h1>
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
            if (selectedSkill === "c#") {
              setSelectedSkill("");
            } else {
              setSelectedSkill("c#");
            }
          }}
          className={styles.skillButton}
        >
          <h1>C#</h1>
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
