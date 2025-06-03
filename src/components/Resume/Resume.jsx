import { useNavigate } from "react-router-dom";
import { useState } from "react";

const buttonStyle = {
  background: "oklch(44.6% 0.043 257.281)",
  color: "#fff",
  border: "none",
  borderRadius: "999px",
  padding: "12px 32px",
  fontSize: "1rem",
  fontWeight: 600,
  cursor: "pointer",
  margin: "12px 0",
  boxShadow: "0 2px 8px rgba(123,47,242,0.15)",
  transition: "transform 0.2s, box-shadow 0.2s",
  alignSelf: "flex-start",
  marginLeft: "32px",
};

const hoverStyle = {
  transform: "scale(1.08)",
  boxShadow: "0 4px 16px rgba(123,47,242,0.25)",
};

const Resume = () => {
  const navigate = useNavigate();
  const [backHover, setBackHover] = useState(false);
  const [downloadHover, setDownloadHover] = useState(false);

  return (
    <div
      style={{
        background: "#f4f4f4",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        style={{
          ...buttonStyle,
          ...(backHover ? hoverStyle : {}),
        }}
        aria-label="Back to Home"
        onMouseEnter={() => setBackHover(true)}
        onMouseLeave={() => setBackHover(false)}
      >
        <span style={{ fontSize: "2rem", lineHeight: 1 }}>&#8592;</span>
      </button>

      <h1
        style={{
          marginTop: 30,
          marginBottom: 30,
          fontSize: "3rem",
          fontWeight: 800,
          fontFamily: "'Montserrat', Arial, sans-serif",
          background: "linear-gradient(90deg, oklch(44.6% 0.043 257.281), #a18cd1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "2px",
          textAlign: "center",
        }}
      >
        Eliezer Then's Resume
      </h1>
      <div
        style={{
          width: "90vw",
          maxWidth: 900,
          height: "90vh",
        }}
      >
        <iframe
          src="/assets/Eliezer-Then-Resume.pdf#toolbar=0"
          title="Eliezer Then Resume"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        >
          This browser does not support PDFs. Please download the PDF to view it:
          <a href="/assets/Eliezer-Then-Resume.pdf">Download PDF</a>
        </iframe>
      </div>
      {/* Download Button Below Resume */}
      <a
        href="/assets/Eliezer-Then-Resume.pdf"
        download
        style={{
          ...buttonStyle,
          alignSelf: "center",
          marginLeft: 0,
          ...(downloadHover ? hoverStyle : {}),
        }}
        onMouseEnter={() => setDownloadHover(true)}
        onMouseLeave={() => setDownloadHover(false)}
      >
        Download
      </a>
    </div>
  );
};

export default Resume;