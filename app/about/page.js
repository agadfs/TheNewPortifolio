"use client";
import PacManRunningOnText from "@/src/components/PacManRunningText";
import PageTitle from "@/src/components/PageTitle";
import { useState, useEffect, useRef } from "react";

export default function AboutPage() {
  const [textCounter, setTextCounter] = useState(0);
  const textRefs = useRef([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextCounter((prevCounter) => prevCounter + 1);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [textCounter]);

  useEffect(() => {
    if (textRefs.current[textCounter]) {
      textRefs.current[textCounter].scrollIntoView({ behavior: "smooth" });
    }
  }, [textCounter]);

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <PageTitle text="About me" />
      {textCounter >= 0 && (
        <div ref={(el) => (textRefs.current[0] = el)}>
          <PacManRunningOnText
            textToRunOn={`I started my academic career in Physics, drawn to understanding the fundamental principles that govern our universe. However, my passion took a new direction when I discovered the world of programming. Captivated by the power of coding to solve complex problems and build innovative solutions, I decided to pivot my studies to Computer Science. Throughout my journey, I've explored languages such as C++ and Python, laying a solid foundation in programming. But it was with JavaScript that I truly found my niche. Now, as a full-stack developer, I specialize in building responsive, user-centric applications, leveraging my skills in JavaScript to create seamless and dynamic user experiences.`}
            textColor={"white"}
          />
        </div>
      )}
      {textCounter >= 1 && (
        <div ref={(el) => (textRefs.current[1] = el)}>
          <PacManRunningOnText
            textToRunOn={`Over the years, my journey in technology has been deeply rooted in my love for JavaScript. This versatile language has been at the core of almost all my projects, enabling me to craft both client-side and server-side applications. From building interactive front-end interfaces with React and Next.js to developing robust back-end systems using Node.js, my expertise spans the entire stack. My projects range from integrating cryptocurrency wallets like MetaMask into web applications to developing complex e-commerce platforms with DatoCMS and Vercel. My ability to adapt and excel in diverse environments is a testament to my dedication and passion for continuous learning and innovation.`}
            textColor={"white"}
          />
        </div>
      )}
      {textCounter >= 2 && (
        <div ref={(el) => (textRefs.current[2] = el)}>
          <PacManRunningOnText
            textToRunOn={`As a full-stack developer, I am constantly inspired by the ever-evolving world of technology. My portfolio showcases a wide range of projects, all unified by one common thread: the power of JavaScript. Whether I'm creating web applications that interact with real-time data using GraphQL and APIs, or building intuitive and scalable user interfaces, JavaScript is my tool of choice. My recent work includes projects like the 'Appoint Me' platform, where I combined MongoDB, Next.js, and GraphQL to deliver a comprehensive, multilingual user experience. My commitment to mastering my craft drives me to explore new technologies, improve my skills, and stay ahead in this dynamic field.`}
            textColor={"white"}
          />
        </div>
      )}
    </div>
  );
}
