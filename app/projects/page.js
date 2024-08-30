"use client";
import Loading from "@/src/components/loading";
import LoadingProjects from "@/src/components/loadingProjects";
import PageTitle from "@/src/components/PageTitle";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let interval;

    if (loadingProgress < 110) {
      interval = setInterval(() => {
        setLoadingProgress((prev) => prev + 5);
      }, 500);
    } else {
      setCompleted(true);
      setLoadingProgress(100);
    }

    return () => clearInterval(interval);
  }, [loadingProgress]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "center",
        gap: "2vh",
      }}
    >
      <PageTitle text="Projects" />
      <LoadingProjects />
    </div>
  );
}
