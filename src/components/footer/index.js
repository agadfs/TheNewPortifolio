"use client";

export default function FooterPc1() {
  return (
    <div
      style={{
        color: "white",
        fontSize: "2vh",
        alignSelf: "center",
        width: "100%",
        placeSelf: "center",
        justifySelf: "center",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        flexDirection: "column",
        alignItems: "center",
        borderTop: "2px solid white",
        marginTop: "5vh",
      }}
    >
      <p>
        Henrique De Freitas Serra, All rights reserved &copy;{" "}
        {new Date().getFullYear()}
      </p>
      <p>Below, read the Qr Code or click it to open my LinkedIn and GitHub</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          gap: "5vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          onClick={() => {
            window.open("https://www.linkedin.com/in/hdfs05/");
          }}
        >
          <p>LinkedIn</p>
          <img
            src="/QrCodeLinkedIn.png"
            alt="linkedin"
            style={{ width: "10vh", height: "10vh" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          onClick={() => {
            window.open("https://github.com/agadfs");
          }}
        >
          <p>GitHub</p>
          <img
            src="/GitHub.png"
            alt="linkedin"
            style={{ width: "10vh", height: "10vh" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>My CV</p>
          <a
            href="/ResumeHenriqueDeFreitasSerra.pdf" // Replace with the path to your PDF file
            target="_blank" // Opens the PDF in a new tab
            rel="noopener noreferrer" // Security feature when using target="_blank"
            style={{
              textDecoration: "none",
              color: "rgba(102, 252, 241)",
              border: "2px solid rgba(102, 252, 241)",
              padding: "2vh",
              fontSize: "4vh",
            }}
          >
            View / Download
          </a>
        </div>
      </div>
    </div>
  );
}
